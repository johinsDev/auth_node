const defaultConfig = {
  PORT: process.env.PORT || (process.argv[3] || 8000)
};

const config = {
  development: {
    DB_URL: 'mongodb://localhost/user-authentication-dev',
    JWT_SECRET: 'pyvel',
  },
  production: {
    DB_URL: 'mongodb://localhost/user-authentication-prod',
  },
};

const getEnv = (env) => ({ ...config[env] });

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV)
};
