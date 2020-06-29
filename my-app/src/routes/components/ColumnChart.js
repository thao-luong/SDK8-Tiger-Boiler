import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { M1Title, NationName, CAcctbal } from "../../ldm/full";
const style = {
    height: 300,
};
export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart measures={[CAcctbal.Max, CAcctbal.Sum]} viewBy={NationName.Default} />
        </div>
    );
};
