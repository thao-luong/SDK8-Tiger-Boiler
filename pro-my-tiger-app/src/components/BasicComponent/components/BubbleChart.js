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
const changeMeasure = newArithmeticMeasure([DeathRate.Sum, Duration.Sum], "sum", m => m.title("AM"));
const filters = newPositiveAttributeFilter(idRef("customer.nation_name"), ["CANADA", "CHINA", "BRAZIL"]);
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
