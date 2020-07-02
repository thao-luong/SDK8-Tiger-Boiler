import React from "react";

import Page from "../components/Page";
import GeoPushpinChartClusteringExample from "../components/GeoPushpinExample/GeoChartWithCluster";
import { PivotTableDrillExample } from "../components/DrillEvent/DrillPivotTable";
import { DrillWithExternalDataExample } from "../components/DrillEvent/DrillExternal";

const GeoPushpin = () => {
    return (
        <Page>
            {/* <GeoPushpinChartClusteringExample/> */}
            {/* <PivotTableDrillExample/> */}
            <DrillWithExternalDataExample />
        </Page>
    );
};

export default GeoPushpin;
