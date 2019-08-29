"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: "",
    resolvers: {},
});
server.applyMiddleware({ app });
app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
//# sourceMappingURL=index.js.map