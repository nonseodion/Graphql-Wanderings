"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var count = 0;
var schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            count: {
                type: graphql_1.GraphQLInt,
                description: "The count",
                resolve: function () { return count; }
            }
        }
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: "RootMutationType",
        fields: {
            updateCount: {
                type: graphql_1.GraphQLInt,
                description: "Updates the count",
                resolve: function () { return count += 1; }
            }
        }
    })
});
exports.default = schema;
