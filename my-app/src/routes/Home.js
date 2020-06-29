import React from "react";

import Page from "../components/Page";
import { InsightViewByIdentifierExample } from "../routes/components/Insights";
import { ColumnChartExample } from "../routes/components/ColumnChart";
import { PivotTableSortingExample } from "../routes/components/PivotTableSorting";
import { AttributeFilterExample } from "../routes/components/AttributeFilter";
import { GeoPushpinChartClusteringExample } from "../routes/components/Geochart";
import { MeasureValueFilterComponentExample } from "../routes/components/MvfComponent";
const Home = () => {
    return (
        <Page>
            {/* <InsightViewByIdentifierExample/> */}
            <ColumnChartExample />
            {/* <PivotTableSortingExample /> */}
            {/* <AttributeFilterExample/> */}
            {/* <GeoPushpinChartClusteringExample/> */}
            {/* <MeasureValueFilterComponentExample/> */}
        </Page>
    );
};

export default Home;
