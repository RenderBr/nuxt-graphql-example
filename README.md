# Nuxt GraphQL Client & Server Example

Just a very simple example of a NuxtJS app running a GraphQL server and a GraphQL client.

## Server

The GraphQL server is setup within `/server`, which is NuxtJS' designated area for backend/server related operation.

The following GraphQL types are defined here: `user.graphql`, `post.graphql`, and `query.graphql`.

Mock data is defined inside of `mockdata.ts`, a mock for a database implementation, for the sake of simplicity.

Inside of `/server/api/`, the `graphql.ts` file is present. This defines all resolvers for matching types, and
establishes a GraphQL server.

The `user` and `post` types also have matching TypeScript models inside of `/types`.

The GraphQL types path, along with the desired API endpoint is given to Nuxt via the `nuxt.config.ts` in the root.
