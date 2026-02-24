import { Typography, Divider } from 'antd';

const { Text } = Typography;

function BlogFooter() {
  return (
    <footer style={{ background: '#fafafa', padding: '32px', textAlign: 'center' }}>
      <Divider />
      <Text type="secondary">&copy; 2025 {'{{projectName}}'}. Built with passion for the web.</Text>
    </footer>
  );
}

export default BlogFooter;
