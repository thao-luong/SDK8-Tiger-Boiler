import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Deaths, PhonesPer1k } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";
const style = {
    height: 300,
};
const changeMeasure = newArithmeticMeasure([Deaths.Sum, PhonesPer1k.Sum], "sum", m => m.title("AM"));
const filters = newPositiveAttributeFilter(idRef("customer.nation_name"), ["CANADA", "CHINA", "BRAZIL"]);
export const BarChartExample = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart
                measures={[DeathRate.Sum, changeMeasure]}
                viewBy={[Country.Default]}
                filters={[filters]}
            />
        </div>
    );
};
