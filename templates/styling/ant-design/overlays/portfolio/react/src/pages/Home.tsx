import { Link } from 'react-router-dom';
import { Typography, Button, Row, Col, Space } from 'antd';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

const { Title, Text, Paragraph } = Typography;

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, display: 'block', marginBottom: 8 }}>Hi, I'm</Text>
          <Title level={1} style={{ color: '#fff', fontSize: 48, marginBottom: 8 }}>{'{{projectName}}'}</Title>
          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 20, display: 'block', marginBottom: 16 }}>Frontend Developer &amp; Software Engineer</Text>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600, margin: '0 auto 32px' }}>
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </Paragraph>
          <Space size="middle">
            <Link to="/projects"><Button type="primary" size="large" style={{ height: 48, paddingInline: 32 }}>View My Work</Button></Link>
            <Link to="/contact"><Button ghost size="large" style={{ height: 48, paddingInline: 32 }}>Get In Touch</Button></Link>
          </Space>
        </div>
      </section>
      <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2}>Featured Projects</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>A selection of my recent work</Text>
        <Row gutter={[24, 24]}>
          {featured.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </section>
      <section style={{ padding: '64px 32px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2}>Skills &amp; Technologies</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>Technologies I work with daily</Text>
        <SkillsGrid />
      </section>
    </div>
  );
}

export default Home;
