import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

const client = new GraphQLClient("http://127.0.0.1:1337/graphql");

export const sdk = getSdk(client);
