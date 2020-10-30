// eslint-disable-next-line
import React from 'react';
import BarGroup from '../shapes/BarGroup';
import { Group } from '@visx/group';
import { SeriesPoint } from '@visx/shape/lib/types';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { Line } from '@visx/shape';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { LegendOrdinal } from '@visx/legend';
import { portlandData, mesaData, usaData } from '../util/sampledata'
import { APIObject } from '../types/data'
import dataMunger from '../util/dataMunger';
import styled from 'styled-components';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';

type CityName = 'cityAPercentage' | 'USAPercentage' | 'cityBPercentage';
const blue = '#8AAAC3';
const white = '#F2EBE3';
const red = '#E0635D';
const background = '#B6B4B7';
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: blue,
  color: white,
};

const StyledLegendOrdinal = styled(LegendOrdinal)`
background-color: #B6B4B7;
color: white;
padding-left: 6vw;
padding-top: 1vh;
`
type TooltipData = {
  bar?: SeriesPoint<APIObject>;
  key: CityName;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
  value: number;
};
export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const defaultMargin = { top: 40, right: 10, bottom: 120, left: 60 };

const getName = (d: APIObject) => d.name;

const data = dataMunger(portlandData, usaData, mesaData)
  .slice(0, 14)
  .sort(function (a, b) { return (a.partisanship - b.partisanship) });

const keys = ['cityAPercentage', 'USAPercentage', 'cityBPercentage'] as unknown as CityName[];

const nameScale = scaleBand<string>({
  domain: data.map(getName),
  padding: 0.2
})
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
});
const percentScale = scaleLinear<number>({
  domain: [0, Math.max(...(data.map(e => Number(e.USAPercentage))))],
});

const colorScale = scaleOrdinal<CityName, string>({
  domain: keys,
  range: [blue, white, red],
});

let tooltipTimeout: number;

export default function TwitterBar({
  width,
  height,
  // events = false,
  margin = defaultMargin,
}: BarGroupProps) {

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal();
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  nameScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, nameScale.bandwidth()]);
  percentScale.range([yMax, 0]);

  return width < 10 ? null : (
    <>
      <div>
        <StyledLegendOrdinal scale={colorScale} direction="column"
          // style={{ color: white, paddingLeft: '20px', paddingTop: '20px'  }}
          labelFormat={(d, i) => {
            switch (true) {
              case i === 0: return 'Portland';
              case i === 1: return 'USA';
              case i === 2: return 'Mesa';
            }
          }}
        />
      </div>
      <svg ref={containerRef} width={width} height={height} >
        <rect x={0} y={0} width={width} height={height} fill={background} rx={0} />
       
        <AxisLeft
          top={margin.top} 
          scale={percentScale} 
          label={"Percentage of Tweets"} 
          left={60}
          hideAxisLine
          tickStroke={white}
          stroke={white}
          tickLength={4}
          labelProps={{
            fontSize:  14,
            fill: white
          }}
        />
        <AxisBottom
          top={yMax + margin.top}
          left={margin.left}
          scale={nameScale}
          stroke={white}
          tickStroke={white}
          hideAxisLine
          label={ 'Trending Tweets'}
        >
          {props => {
            const tickLabelSize = 12;
            const tickRotate = -45;
            const tickColor = white;
            const axisCenter =
              (props.axisToPoint.x - props.axisFromPoint.x);
            return (
              <g className="my-custom-bottom-axis">
                {props.ticks.map((tick, i) => {
                  const tickX = tick.to.x;
                  const tickY =
                    tick.to.y + tickLabelSize;
                  return (
                    <>
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                        // style={{ marginLeft: '100px'}}
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
                    </>
                  );
                })}
                {/* <text
                  textAnchor="middle"
                  transform={`translate(${axisCenter}, 50)`}
                  fontSize="10"
                >
                  {props.label}
                </text> */}
              </g>
            );
          }}
        </AxisBottom>
        <Group
          top={margin.top}
          left={margin.left}>
          
          
          <BarGroup<APIObject, CityName>
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
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      onMouseMove={event => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        const top = event.clientY - 200;
                        const left = event.clientX;
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop: top,
                          tooltipLeft: left,
                        });
                      }}
                    />
                  ))}
                </Group>
              ))
            }
          </BarGroup>
          
        </Group>

      
        
      </svg>
      {tooltipOpen &&
        tooltipData &&
        (
          <TooltipInPortal
            key={Math.random()} // update tooltip bounds each render
            top={tooltipTop}
            left={tooltipLeft}
            style={tooltipStyles}
          >
            <div>{(tooltipData.value * 100).toFixed(2)}%</div>
          </TooltipInPortal>
        )}
    </>
  );
}
