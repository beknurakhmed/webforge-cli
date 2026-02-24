import styled from 'styled-components';

const ChartCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #111827;
  }
`;

const ChartArea = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const ChartBars = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

const ChartBar = styled.div<{ $height: number }>`
  flex: 1;
  background: linear-gradient(to top, #4f46e5, #818cf8);
  border-radius: 4px 4px 0 0;
  transition: height 0.3s;
  min-width: 12px;
  height: ${props => props.$height}%;
`;

interface ChartPlaceholderProps {
  title: string;
  data?: number[];
}

export function ChartPlaceholder({ title, data }: ChartPlaceholderProps) {
  const bars = data || [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95];

  return (
    <ChartCard>
      <h3>{title}</h3>
      <ChartArea>
        <ChartBars>
          {bars.map((h, i) => (
            <ChartBar key={i} $height={h} />
          ))}
        </ChartBars>
      </ChartArea>
    </ChartCard>
  );
}
