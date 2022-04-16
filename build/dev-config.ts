let localConfig: any = {};

try {
  // eslint-disable-next-line
  const localConfigModule = require('./dev-config-local.ts');
  localConfig = localConfigModule.config;
} catch (e) {}

const createConfig = () => {
  const config = {
    // proxy listen port
    port: 8904,
    ssrPort: 8905,
    // eslint-disable-next-line
    ...(localConfig as {}),
  };

  Object.entries(localConfig.urls ?? {}).forEach(([k, v]) => {
    (config as any).urls[k] = {
      ...(config as any).urls[k],
      ...(v as any),
    };
  });

  (global as any).proxyConfig = config;

  return config;
};

export const config = createConfig();
