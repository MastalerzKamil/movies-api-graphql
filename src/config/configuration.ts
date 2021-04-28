export default () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`[CONFIG] Loaded environment: ${process.env.NODE_ENV}`);
  }

  const config = {
    nodeEnv: process.env.NODE_ENV,
    mongodb: {
      uri: process.env.MONGODB_URI,
    },
  };

  return config;
};
