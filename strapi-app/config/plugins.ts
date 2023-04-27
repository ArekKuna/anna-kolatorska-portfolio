export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 15,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
