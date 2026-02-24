import { Typography, Card, Avatar, Timeline, Divider } from 'antd';
import SkillsGrid from '../components/SkillsGrid';

const { Title, Text, Paragraph } = Typography;

const timeline = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <div style={{ padding: '64px 32px', maxWidth: 800, margin: '0 auto' }}>
      <Title level={2}>About Me</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 32 }}>My journey as a developer</Text>
      <Card style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Avatar size={80} style={{ fontSize: 40, backgroundColor: '#f0f0f0' }}>{'👨‍💻'}</Avatar>
          <Paragraph style={{ margin: 0 }}>
            I am a passionate software engineer with a love for building beautiful, performant
            web applications. With expertise in modern JavaScript frameworks and a keen eye
            for design, I bridge the gap between functionality and aesthetics.
          </Paragraph>
        </div>
      </Card>
      <Title level={3}>Experience</Title>
      <Timeline
        style={{ marginTop: 24 }}
        items={timeline.map((item) => ({
          children: (
            <div>
              <Text type="secondary">{item.year}</Text>
              <Title level={5} style={{ margin: '4px 0' }}>{item.role}</Title>
              <Text strong style={{ color: '#4f46e5' }}>{item.company}</Text>
              <Paragraph type="secondary" style={{ marginTop: 4 }}>{item.desc}</Paragraph>
            </div>
          ),
        }))}
      />
      <Divider />
      <Title level={3}>Skills</Title>
      <SkillsGrid />
    </div>
  );
}

export default About;
