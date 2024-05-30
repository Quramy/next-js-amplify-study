import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  console.log("Node.js version:", process.version);
  console.log("execute getStaticProps");
  return {
    props: {
      now: Date.now(),
    },
    revalidate: 30,
  };
};

export default function Home({ now }: { now: number }) {
  const renderedAt = new Date(now).toISOString();
  return (
    <div>
      <p>Pages Router Page</p>
      <p>Rendered at: {renderedAt}</p>
    </div>
  );
}
