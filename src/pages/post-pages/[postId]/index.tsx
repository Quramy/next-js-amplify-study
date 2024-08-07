import { type GetStaticPaths, GetStaticProps } from "next";

import {
  type Post,
  getAllPostsIds,
  getPostById,
} from "../../../lib/data/posts";

type Props = {
  readonly post: Post;
};

type Params = {
  readonly postId: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = await getAllPostsIds();
  return {
    paths: postIds.map((postId) => ({ params: { postId } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  if (!context.params?.postId) {
    return {
      notFound: true,
    };
  }
  const post = await getPostById(context.params.postId);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    revalidate: 30,
    props: {
      post,
    },
  };
};

export default function Page({ post }: Props) {
  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <pre>{post.body}</pre>
      </div>
      <footer>Updated at: {post.updatedAt}</footer>
    </div>
  );
}
