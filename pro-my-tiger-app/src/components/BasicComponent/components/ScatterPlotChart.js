import React from "react";
import { ScatterPlot } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Duration } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";

const xMeasure = DeathRate.Sum;
const yMeasure = Duration.Sum;
const style = {
    height: 300,
};
const filters = newPositiveAttributeFilter(Country.Default, ["Angola", "Japan", "Cuba"]);
export const ScatterPlotExample = () => {
    return (
        <div style={style} className="s-scatter-plot">
            <ScatterPlot
                xAxisMeasure={xMeasure}
                yAxisMeasure={yMeasure}
                attribute={Country.Default}
                filters={[filters]}
            />
        </div>
    );
};
