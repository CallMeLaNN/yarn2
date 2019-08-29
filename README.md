# Yarn v2 PnP and @types

This is to showcase the issue [#3222](https://github.com/apollographql/apollo-server/issues/3222)

Run `yarn` and `yarn pnpify tsc` to produce this error:

```text
.yarn/virtual/apollo-server-express-virtual-80713ece76/0/cache/apollo-server-express-npm-2.9.1-667452354a.zip/node_modules/apollo-server-express/dist/ApolloServer.d.ts:31:120 - error TS2307: Cannot find module 'express-serve-static-core'.

31     getMiddleware({ path, cors, bodyParserConfig, disableHealthCheck, onHealthCheck, }?: GetMiddlewareOptions): import("express-serve-static-core").Router;
                                                                                                                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error.
```

Note that the return type has been explicitly defined [#3230](https://github.com/apollographql/apollo-server/pull/3230) to avoid this error.
