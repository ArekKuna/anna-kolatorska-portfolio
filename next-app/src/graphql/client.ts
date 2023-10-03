import { GraphQLClient } from "graphql-request";
import { getSdk } from "graphql/generated";

const client = new GraphQLClient("http://127.0.0.1:1337/graphql");

export const sdk = getSdk(client);
