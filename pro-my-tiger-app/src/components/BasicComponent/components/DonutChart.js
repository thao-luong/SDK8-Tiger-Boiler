import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { newArithmeticMeasure } from "@gooddata/sdk-model";
import { Deaths, PhonesPer1k, Country, Gdp } from "../../../ldm/full";
const changeMeasure = newArithmeticMeasure(
    [Deaths.Sum, PhonesPer1k.Sum],
    // @ts-ignore
    "SUM",
    m => m.title("AM"),
);
const measures = [Deaths.Sum, PhonesPer1k.Sum, Gdp.Sum, changeMeasure];
const style = {
    height: 300,
};
export const DonutChartExample = () => {
    return (
        <div style={style} className="s-donut-chart">
            <DonutChart measures={measures} />
        </div>
    );
};
