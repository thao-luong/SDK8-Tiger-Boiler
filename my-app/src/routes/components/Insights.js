import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-ext/styles/css/insightView.css";
import { Insights } from "../../ldm/full";

const style = { height: 500 };
export const InsightViewByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView
                insight={Insights.SomeVisualizationObject}
                // config={{
                //     legend: {
                //         position: "left",
                //     },
                // }}
            />
        </div>
    );
};
