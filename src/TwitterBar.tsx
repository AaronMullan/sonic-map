import React from 'react';
import BarGroup from './shapes/BarGroup';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import {demoPercentage, TwitterPercentage } from './sampledata'

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

const getName = (d: TwitterPercentage) => d.name;

const blue = '#aeeef8';
export const green = '#ffffff';
const purple = '#9caff6';
export const background = '#612efb';

const data = demoPercentage;
const keys = Object.keys(data[0]).slice(2) as string[];

const nameScale = scaleBand<string>({
  domain: data.map(getName),
  padding: 0.2
})
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
});
const percentScale = scaleLinear<number>({
  domain: [0, 1],
});

const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [purple, blue, green],
});

export default function TwitterBar({
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps){

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  nameScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, nameScale.bandwidth()]);
  percentScale.range([yMax, 0]);

  return width < 10 ? null : (
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
                    // rx={4}
                    // onClick={() => {
                    //   if (!events) return;
                    //   const { key, value } = bar;
                    //   alert(JSON.stringify({ key, value }));
                    // }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group>
      <AxisBottom
        top={yMax + margin.top}
        // tickFormat={formatDate}
        scale={nameScale}
        stroke={green}
        tickStroke={green}
        hideAxisLine
        tickLabelProps={() => ({
          fill: green,
          fontSize: '1rem',
          textAnchor: 'middle',
        })}
      />
    </svg>
  );
}
