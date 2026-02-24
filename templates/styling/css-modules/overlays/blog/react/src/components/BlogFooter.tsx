import styles from './BlogFooter.module.css';

function BlogFooter() {
  return (
    <footer className={styles.blogFooter}>
      <p>&copy; 2025 {'{{projectName}}'}. Built with passion for the web.</p>
    </footer>
  );
}

export default BlogFooter;
