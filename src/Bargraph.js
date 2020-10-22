import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';

// We'll use some mock data from `@visx/mock-data` for this.
// const data = letterFrequency;
const demoPercentage = [
  // {
  //   "name": "Stadia",
  //   "url": "http://twitter.com/search?q=Stadia",
  //   "usaPercentage" : 0.005353113204683215,
  //   "mesaPercentage" : 0.00345543938054644,
  //   "portlandPercentage" : 0.00541385751631853,
  // },
  // {
  //   "name": "radia",
  //   "url": "http://twitter.com/search?q=Stadia",
  //   "usaPercentage" : 0.003353113204683215,
  //   "mesaPercentage" : 0.00345543938054644,
  //   "portlandPercentage" : 0.00541385751631853,
  // },
  { "name": 'Buhari_Portland', 
    "url": 'http://twitter.com/search?q=Buhari', 
    "promoted_content": null, 
    "query": 'Buhari', 
    "tweet_volume": 1062669, 
    "location": 'Portland', 
    "percentage": 0.30977485208963473 }, 

    {"name": 'Buhari_Mesa', 
    "url": 'http://twitter.com/search?q=Buhari', 
    "promoted_content": null, 
    "query": 'Buhari', 
    "tweet_volume": 1062669, 
    "location": 'Mesa', 
    "percentage": 0.40977485208963473 },
]
const data = demoPercentage;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.name;
const y = d => +d.percentage;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
function BarGraph(props) {
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg>
  );
}

export default BarGraph;