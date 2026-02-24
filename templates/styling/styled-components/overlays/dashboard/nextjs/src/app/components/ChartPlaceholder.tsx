'use client';

import styled from 'styled-components';

const ChartCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const ChartTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.25rem;
`;

const ChartBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 200px;
  padding-top: 1rem;
`;

const ChartBarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

const ChartBar = styled.div<{ $height: number }>`
  width: 100%;
  background: linear-gradient(to top, #4f46e5, #818cf8);
  border-radius: 4px 4px 0 0;
  transition: height 0.3s;
  min-height: 4px;
  height: ${props => props.$height}%;
`;

const ChartLabel = styled.span`
  font-size: 0.65rem;
  color: #6b7280;
  margin-top: 0.35rem;
`;

const ChartLineWrapper = styled.div`
  padding: 0.5rem 0;
`;

const ChartSVG = styled.svg`
  width: 100%;
  height: 150px;
`;

const PiePlaceholder = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
`;

const PieChart = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const PieSegment = styled.div<{ $color: string }>`
  padding: 1rem;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  background: ${props => props.$color};
`;

const PieLegend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #374151;
`;

const LegendDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: ${props => props.$color};
`;

interface ChartPlaceholderProps {
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export function ChartPlaceholder({ title, type = 'bar' }: ChartPlaceholderProps) {
  const bars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 90, 68];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <ChartCard>
      <ChartTitle>{title}</ChartTitle>
      {type === 'bar' && (
        <ChartBars>
          {bars.map((height, i) => (
            <ChartBarWrapper key={i}>
              <ChartBar $height={height} />
              <ChartLabel>{months[i]}</ChartLabel>
            </ChartBarWrapper>
          ))}
        </ChartBars>
      )}
      {type === 'line' && (
        <ChartLineWrapper>
          <ChartSVG viewBox="0 0 400 150">
            <polyline
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2.5"
              points="0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10"
            />
            <polyline
              fill="rgba(79,70,229,0.1)"
              stroke="none"
              points="0,150 0,120 35,90 70,100 105,50 140,70 175,30 210,45 245,20 280,55 315,40 350,25 385,10 385,150"
            />
          </ChartSVG>
        </ChartLineWrapper>
      )}
      {type === 'pie' && (
        <PiePlaceholder>
          <PieChart>
            <PieSegment $color="#4f46e5">35%</PieSegment>
            <PieSegment $color="#7c3aed">25%</PieSegment>
            <PieSegment $color="#06b6d4">20%</PieSegment>
            <PieSegment $color="#10b981">20%</PieSegment>
          </PieChart>
          <PieLegend>
            <LegendItem><LegendDot $color="#4f46e5" />Direct (35%)</LegendItem>
            <LegendItem><LegendDot $color="#7c3aed" />Organic (25%)</LegendItem>
            <LegendItem><LegendDot $color="#06b6d4" />Referral (20%)</LegendItem>
            <LegendItem><LegendDot $color="#10b981" />Social (20%)</LegendItem>
          </PieLegend>
        </PiePlaceholder>
      )}
    </ChartCard>
  );
}
