import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Duration } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";
const changeMeasure = newArithmeticMeasure([DeathRate.Sum, Duration.Sum], "sum", m => m.title("AM"));
const filters = newPositiveAttributeFilter(idRef("customer.nation_name"), ["CANADA", "CHINA", "BRAZIL"]);
const style = {
    height: 300,
};
export const ComboChartExample = () => {
    return (
        <div style={style} className="s-combo-chart">
            <ComboChart
                primaryMeasures={[DeathRate.Sum]}
                secondaryMeasures={[Duration.Sum]}
                viewBy={Country.Default}
                // filters = {[filters]}
            />
        </div>
    );
};
