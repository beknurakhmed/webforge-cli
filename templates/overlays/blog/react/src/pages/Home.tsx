import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';

function Home() {
  return (
    <div className="blog-layout">
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <BlogSidebar />
    </div>
  );
}

export default Home;
