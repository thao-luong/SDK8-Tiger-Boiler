import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { NationName, QuantitiesRatio, arithmeticMeasure, CAcctbal } from "../../ldm/full";
const style = {
    height: 300,
};
export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart
                measures={[QuantitiesRatio, CAcctbal.Sum, arithmeticMeasure]}
                viewBy={[NationName.Default]}
            />
        </div>
    );
};
