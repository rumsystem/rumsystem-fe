export const sleep = (time?: number) => new Promise((rs) => setTimeout(rs, time));

export const createPromise = <T extends unknown>() => {
  let rs!: (v: T) => unknown;
  let rj!: (v: any) => unknown;

  const p = new Promise<T>((resolve, reject) => {
    rs = resolve;
    rj = reject;
  });

  return { p, rs, rj };
};

export const promiseAllSettledThrottle = <T extends readonly (() => Promise<unknown>)[]>(
  tasks: T,
  concurrentLimit: number,
): Promise<{
  [K in keyof T]: K extends number
    ? PromiseSettledResult<Awaited<ReturnType<T[K]>>>
    : unknown
}> => {
  let running = 0;
  const result: Array<any> = [];
  let current = 0;

  const p = createPromise();

  const run = () => {
    if (current === tasks.length) {
      if (running === 0) {
        p.rs(result);
      }
      return;
    }
    while (running < concurrentLimit && current < tasks.length) {
      running += 1;
      const itemIndex = current;
      const item = tasks[current]();
      item.then(
        (v) => {
          result[itemIndex] = {
            status: 'fulfilled',
            value: v,
          };
        },
        (e) => {
          result[itemIndex] = {
            status: 'rejected',
            reason: e,
          };
        },
      ).finally(() => {
        running -= 1;
        run();
      });
      result[current] = item;
      current += 1;
    }
  };

  run();

  return p.p as any;
};
