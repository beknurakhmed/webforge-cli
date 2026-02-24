import PostCard from '../components/PostCard';
import BlogSidebar from '../components/BlogSidebar';
import { posts } from '../data/posts';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.blogLayout}>
      <div className={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <BlogSidebar />
    </div>
  );
}

export default Home;
