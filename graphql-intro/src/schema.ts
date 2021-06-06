
import {GraphQLInt, GraphQLObjectType, GraphQLSchema} from "graphql"

const count = 0;

const schema = new GraphQLSchema(
  {
    query: new GraphQLObjectType({
      name: "RootQueryType",
      fields:{
        count:{
          type: GraphQLInt,
          resolve: () => count
        }
      }
    })
  }
)

export default schema;