<AxisBottom
        top={height - margin.bottom}
        left={margin.left}
        scale={xScale}
        numTicks={numTicksForWidth(width)}
        label="time"
      >
        {props => {
          const tickLabelSize = 10;
          const tickRotate = 45;
          const tickColor = '#8e205f';
          const axisCenter =
            (props.axisToPoint.x - props.axisFromPoint.x) / 2;
          return (
            <g className="my-custom-bottom-axis">
              {props.ticks.map((tick, i) => {
                const tickX = tick.to.x;
                const tickY =
                  tick.to.y + tickLabelSize + props.tickLength;
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
                      textAnchor="middle"
                      fill={tickColor}
                    >
                      {tick.formattedValue}
                    </text>
                  </Group>
                );
              })}
              <text
                textAnchor="middle"
                transform={`translate(${axisCenter}, 50)`}
                fontSize="8"
              >
                {props.label}
              </text>
            </g>
          );
        }}
      </AxisBottom>