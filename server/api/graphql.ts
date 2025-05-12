import {typeDefs} from '#graphql/schema'
import {ApolloServer} from '@apollo/server'
import {startServerAndCreateH3Handler} from '@as-integrations/h3'
import {postsMockData, usersMockData} from "~/server/mockdata";
import {Resolvers} from "#graphql/resolver";

const resolvers: Resolvers = {
    Query: {
        users() {
            return usersMockData;
        },
        posts() {
            return postsMockData;
        },
        user(_, args) {
            return usersMockData.find(user => user.id === args.id);
        },
        post(_, args){
            return postsMockData.find(post => post.id === args.id);
        }
    },
    Post: {
        user(parent) {
            return usersMockData.find(user => user.id === parent.user)
        }
    }
}

const apollo = new ApolloServer({typeDefs, resolvers})

export default startServerAndCreateH3Handler(apollo);