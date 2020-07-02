import React from "react";

import Page from "../components/Page";
import { ColumnChartExample } from "../components/BasicComponent/components/ColumnChart";
import { PivotTableSortingExample } from "../components/BasicComponent/components/PivotTableSorting";
import { AttributeFilterExample } from "../components/BasicComponent/components/AttributeFilter";
import { GeoPushpinChartClusteringExample } from "../components/BasicComponent/components/Geochart";
import { MeasureValueFilterComponentExample } from "../components/BasicComponent/components/MvfComponent";
import { BarChartExample } from "../components/BasicComponent/components/Barchart";
import { HeatmapExample } from "../components/BasicComponent/components/HeatMap";
import { BubbleChartExample } from "../components/BasicComponent/components/BubbleChart";
import { BulletChartExample } from "../components/BasicComponent/components/BulletChart";
import { ComboChartExample } from "../components/BasicComponent/components/ComboChart";
import { DonutChartExample } from "../components/BasicComponent/components/DonutChart";
import { KpiExample } from "../components/BasicComponent/components/KpiExample";
import { LineChartExample } from "../components/BasicComponent/components/Linechart";
import { PieChartExample } from "../components/BasicComponent/components/PieChart";
import { ScatterPlotExample } from "../components/BasicComponent/components/ScatterPlotChart";
import { StackedAreaChartExample } from "../components/BasicComponent/components/StackedAreaChart";
import { TreemapExample } from "../components/BasicComponent/components/TreeMap";

const Basic = () => {
    return (
        <Page>
            {/* <ColumnChartExample /> */}
            {/* <PivotTableSortingExample /> */}
            {/* <AttributeFilterExample/> */}
            {/* <GeoPushpinChartClusteringExample/> */}
            {/* <MeasureValueFilterComponentExample/> */}
            {/* <BarChartExample/> */}
            {/* <HeatmapExample/> */}
            {/* <BubbleChartExample/> */}
            {/* <BulletChartExample/> */}
            {/* <ComboChartExample/> */}
            <DonutChartExample />
            {/* <KpiExample/> */}
            {/* <LineChartExample/> */}
            {/* <PieChartExample/> */}
            {/* <ScatterPlotExample/> */}
            {/* <StackedAreaChartExample/> */}
            {/* <TreemapExample/> */}
        </Page>
    );
};

export default Basic;
