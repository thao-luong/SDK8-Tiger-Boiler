import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Insights } from "../../ldm/full";

const style = { height: 300 };

export const InsightViewByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Insights.SomeVisualizationObject} />
        </div>
    );
};
