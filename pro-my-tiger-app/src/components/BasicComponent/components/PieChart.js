import React from "react";
import { PieChart } from "@gooddata/sdk-ui-charts";
import { Deaths, Duration, DeathRate } from "../../../ldm/full";
const measures = [Deaths.Sum, Duration.Sum, DeathRate.Sum];
const style = {
    height: 300,
};
export const PieChartExample = () => {
    return (
        <div style={style} className="s-pie-chart">
            <PieChart measures={measures} />
        </div>
    );
};
