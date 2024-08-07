import type { GetStaticProps } from "next";
import Link from "next/link";

import { type Post, getAllPosts } from "../../lib/data/posts";

type Props = {
  readonly posts: readonly Post[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts();
  return {
    revalidate: 30,
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: Props) {
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/post-pages/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
