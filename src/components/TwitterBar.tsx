import React from 'react';
import BarGroup from '../shapes/BarGroup';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { TwitterPercentage, portlandData, mesaData, usaData } from '../util/sampledata'
import dataMunger from '../util/dataMunger';

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

const getName = (d: TwitterPercentage) => d.name;

const blue = '#8AAAC3';
const white = '#F2EBE3';
const red = '#E0635D';
const background = '#B6B4B7';

const data = dataMunger(portlandData, usaData, mesaData).slice(0, 20).sort(function (a, b) {
  return (a.partisanship - b.partisanship)
});;
const keys = ['portlandPercentage', 'unitedstatesPercentage', 'mesaPercentage'];

const nameScale = scaleBand<string>({
  domain: data.map(getName),
  padding: 0.2
})
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
});
const percentScale = scaleLinear<number>({
  domain: [0, .13],
});

const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [blue, white, red],
});

export default function TwitterBar({
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps) {

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  nameScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, nameScale.bandwidth()]);
  percentScale.range([yMax, 0]);

  return width < 10 ? null : (
    <div style={{marginTop: "1vh"}}>
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
      <Group top={margin.top} left={margin.left}>
        <BarGroup
          data={data}
          keys={keys}
          height={yMax}
          x0={getName}
          x0Scale={nameScale}
          x1Scale={cityScale}
          yScale={percentScale}
          color={colorScale}
        >
          {barGroups =>
            barGroups.map(barGroup => (
              <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                {barGroup.bars.map(bar => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group>

      <AxisBottom
        top={yMax + margin.top}
        scale={nameScale}
        stroke={white}
        tickStroke={blue}
        // tickTransform={"rotate(-65)"}
        hideAxisLine
        tickLabelProps={() => ({
          fill: red,
          fontSize: '1rem',
          textAnchor: 'middle',  
        })}
      />
    </svg>
    </div>
  );
}
