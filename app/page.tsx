// Import your Client Component
import HomePage from "./HomePage";

async function getPosts() {
  const res = await fetch("https://gorest.co.in/public/v2/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();

  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return (
    <>
      <HomePage recentPosts={recentPosts} />
    </>
  );
}
