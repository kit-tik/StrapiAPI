export default ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        film: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
//  graphql: {
//    enabled: true,
//    config: {
//      playgroundAlways: false,
//      defaultLimit: 10,
//      maxLimit: 20,
//      apolloServer: {
//        tracing: true,
//      },
//    }
//  },
  // ...
});
