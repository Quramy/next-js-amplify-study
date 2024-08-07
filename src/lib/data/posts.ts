export type Post = {
  readonly id: string;
  readonly title: string;
  readonly categories: readonly string[];
  readonly body: string;
  readonly updatedAt: string;
};

const posts = [
  {
    id: "p001",
    title: "App router",
    categories: ["Next.js", "JavaScript"],
    body: "T.B.D.",
  },
  {
    id: "p002",
    title: "GraphQL and ApolloClient",
    categories: ["GraphQL", "JavaScript"],
    body: "T.B.D.",
  },
] as const satisfies readonly Omit<Post, "updatedAt">[];

export async function getAllPostsIds(): Promise<readonly string[]> {
  return posts.map((p) => p.id);
}

export async function getAllPosts(): Promise<readonly Post[]> {
  const now = new Date().toISOString();
  console.log("getAllPosts", now);
  return posts.map((post) => ({
    ...post,
    updatedAt: now,
  }));
}

export async function getPostById(postId: string): Promise<Post | null> {
  const now = new Date().toISOString();
  console.log("getPostById", now);
  const found = posts.find((p) => p.id === postId);
  return found ? { ...found, updatedAt: now } : null;
}
