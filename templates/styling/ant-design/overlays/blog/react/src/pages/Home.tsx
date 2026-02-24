import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';

function Home() {
  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <BlogSidebar />
    </div>
  );
}

export default Home;
