let localConfig: any = {};

try {
  // eslint-disable-next-line
  const localConfigModule = require('./dev-config-local.ts');
  localConfig = localConfigModule.config;
} catch (e) {}

const createConfig = () => {
  const config = {
    // proxy listen port
    listen: 8904,
    // eslint-disable-next-line
    ...(localConfig as {}),
    urls: {
      fe: {
        host: '127.0.0.1',
        port: 8905,
        protocal: 'http',
        ...localConfig.fe,
      },
      api: {
        host: '127.0.0.1',
        port: 8906,
        protocal: 'http',
        ...localConfig.api,
      },
      prod: {
        host: '',
        port: 443,
        protocal: 'https',
        agent: null as any,
        ...localConfig.prod,
      },
    },
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
