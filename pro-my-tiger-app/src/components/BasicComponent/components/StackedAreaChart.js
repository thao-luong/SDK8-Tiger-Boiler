import React from "react";
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Duration } from "../../../ldm/full";
const measures = [DeathRate.Sum, Duration.Sum];
const chartConfig = {
    stacking: true,
};
const style = {
    height: 300,
};
export const StackedAreaChartExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <AreaChart measures={measures} viewBy={Country.Default} config={chartConfig} />
        </div>
    );
};
