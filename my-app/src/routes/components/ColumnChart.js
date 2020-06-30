import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, M3Title } from "../../ldm/full";
import { newArithmeticMeasure, modifySimpleMeasure } from "@gooddata/sdk-model";
const style = {
    height: 300,
};
// const QuantitiesRatio = modifySimpleMeasure(Quantities, m => m.title("Ratio").ratio());
const arithmeticMeasure1 = newArithmeticMeasure([M3Title, CAcctbal.Sum], "sum", m =>
    m.format("#,##0").title("$ Avg State Daily Costs"),
);
export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart measures={[M3Title, CAcctbal.Sum, arithmeticMeasure1]} viewBy={NationName.Default} />
        </div>
    );
};
