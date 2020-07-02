import React from "react";
import { BubbleChart } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Duration } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";
const style = {
    height: 300,
};
const changeMeasure = newArithmeticMeasure([DeathRate.Sum, Duration.Sum], "SUM", m => m.title("AM"));
const filters = newPositiveAttributeFilter(Country.Default, ["Angola", "Japan", "Cuba"]);
export const BubbleChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BubbleChart
                xAxisMeasure={DeathRate.Sum}
                yAxisMeasure={Duration.Sum}
                size={changeMeasure}
                viewBy={Country.Default}
                filters={[filters]}
            />
        </div>
    );
};
