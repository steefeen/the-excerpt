import {generateClient} from "aws-amplify/api";
import type {Schema} from "../amplify/data/resource.ts";

const client = generateClient<Schema>();


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const loader = async ({params}) => {
    const p = await client.models.Post.get({id: params.postId});
    const post = p.data
    return {post};
};