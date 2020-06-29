import React from "react";

import Page from "../components/Page";
import { InsightViewByIdentifierExample } from "../routes/components/Insights";
import { ColumnChartExample } from "../routes/components/ColumnChart";
import { PivotTableSortingExample } from "../routes/components/PivotTableSorting";
const Home = () => {
    return (
        <Page>
            {/* <InsightViewByIdentifierExample/> */}
            {/* <ColumnChartExample/> */}
            <PivotTableSortingExample />
        </Page>
    );
};

export default Home;
