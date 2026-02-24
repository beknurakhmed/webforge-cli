import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';
import styles from './Category.module.css';

function Category() {
  const { slug } = useParams();
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === slug?.toLowerCase()
  );
  const categoryName = filtered.length > 0 ? filtered[0].category : slug;

  return (
    <div className={styles.categoryPage}>
      <Link to="/" className={styles.backLink}>Back to Home</Link>
      <h1 className={styles.categoryHeading}>Category: {categoryName}</h1>
      {filtered.length === 0 ? (
        <p className={styles.noPosts}>No posts found in this category.</p>
      ) : (
        <div className={styles.postList}>
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
