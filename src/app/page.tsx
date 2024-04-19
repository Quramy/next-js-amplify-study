export const revalidate = 30;

export default function Home() {
  const now = Date.now();
  console.log("Render index", new Date(now).toLocaleString());
  const renderedAt = new Date(now).toISOString();
  return (
    <div>
      <p>App Router Page</p>
      <p>Rendered at: {renderedAt}</p>
    </div>
  );
}
