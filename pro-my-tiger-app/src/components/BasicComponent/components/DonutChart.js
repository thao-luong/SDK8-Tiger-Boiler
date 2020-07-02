import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { Deaths, Duration, DeathRate } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";
const changeMeasure = newArithmeticMeasure([Deaths.Sum, Duration.Sum], "sum", m => m.title("AM"));
const filters = newPositiveAttributeFilter(idRef("customer.nation_name"), ["CANADA", "CHINA", "BRAZIL"]);
const measures = [Deaths.Sum, Duration.Sum, DeathRate.Sum, changeMeasure];
const style = {
    height: 300,
};
export const DonutChartExample = () => {
    return (
        <div style={style} className="s-donut-chart">
            <DonutChart measures={measures} filters={[filters]} />
        </div>
    );
};
