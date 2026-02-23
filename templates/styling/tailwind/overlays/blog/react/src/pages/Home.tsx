import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <BlogSidebar />
    </div>
  );
}

export default Home;
