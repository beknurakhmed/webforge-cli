import styled from 'styled-components';
import { skills } from '../data/projects';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const SkillGroup = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #4f46e5;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: #f3f4f6;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #374151;
`;

function SkillsGrid() {
  return (
    <Grid>
      {skills.map((group, i) => (
        <SkillGroup key={i}>
          <h3>{group.category}</h3>
          <SkillTags>
            {group.items.map((skill, j) => (
              <SkillTag key={j}>{skill}</SkillTag>
            ))}
          </SkillTags>
        </SkillGroup>
      ))}
    </Grid>
  );
}

export default SkillsGrid;
