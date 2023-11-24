import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import useDemoConfig from '../hooks/useDemoConfig';

export default function Line({ noAxis }: { noAxis?: [boolean, boolean] }) {
  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: 'time',
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(() => {
    return {
      getValue: datum => datum.primary as unknown as Date,
    };
  }, []);

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        getValue: datum => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      {/* <ResizableBox> */}
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          
        }}
      />
      {/* </ResizableBox> */}
    </>
  );
}
