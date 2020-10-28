// eslint-disable-next-line
import React from 'react';
import BarGroup from '../shapes/BarGroup';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { Line } from '@visx/shape';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { LegendOrdinal } from '@visx/legend';
import { TwitterPercentage, portlandData, mesaData, usaData } from '../util/sampledata'
import dataMunger from '../util/dataMunger';
import styled from 'styled-components';


const StyledLegendOrdinal = styled(LegendOrdinal)`
background-color: #B6B4B7;
padding-left: 2vw;
`

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const defaultMargin = { top: 40, right: 0, bottom: 200, left: 0 };

const getName = (d: TwitterPercentage) => d.name;

const blue = '#8AAAC3';
const white = '#F2EBE3';
const red = '#E0635D';
const background = '#B6B4B7';

const data = dataMunger(portlandData, usaData, mesaData).slice(0, 14).sort(function (a, b) {
  return (a.partisanship - b.partisanship)
});;
console.log(data)
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
  domain: [0, Math.max(...(data.map(e => Number(e.unitedstatesPercentage))))],
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
    <>
      <div>
        <StyledLegendOrdinal scale={colorScale} direction="column" 
  
        labelFormat={label => 
          label.slice(0,-10).charAt(0).toUpperCase() + 
          label.slice(0,-10).slice(1)} />
      </div>
      <svg width={width} height={height} >
        <rect x={0} y={0} width={width} height={height} fill={background} rx={0} />
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
          tickStroke={white}
          hideAxisLine
        >
          {props => {
            const tickLabelSize = 10;
            const tickRotate = -65;
            const tickColor = white;
            const axisCenter =
              (props.axisToPoint.x - props.axisFromPoint.x) / 2;
            return (
              <g className="my-custom-bottom-axis">
                {props.ticks.map((tick, i) => {
                  const tickX = tick.to.x;
                  const tickY =
                    tick.to.y + tickLabelSize;
                  // props.tickLength;
                  return (
                    <Group
                      key={`vx-tick-${tick.value}-${i}`}
                      className={'vx-axis-tick'}
                    >
                      <Line
                        from={tick.from}
                        to={tick.to}
                        stroke={tickColor}
                      />
                      
                      <text
                        transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                        fontSize={tickLabelSize}
                        textAnchor="end"
                        fill={tickColor}
                        >
                          <a href={`http://twitter.com/search?q=${tick.value}`}>
                        {tick.formattedValue}
                        </a>
                      </text>
                    </Group>
                  );
                })}
                <text
                
                  textAnchor="middle"
                  transform={`translate(${axisCenter}, 50)`}
                  fontSize="10"
                >
                  {props.label}
                </text>
              </g>
            );
          }}
        </AxisBottom>
      </svg>
    </>
  );
}
