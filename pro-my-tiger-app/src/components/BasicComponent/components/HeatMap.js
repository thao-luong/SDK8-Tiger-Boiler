import React from "react";
import { Heatmap } from "@gooddata/sdk-ui-charts";
import { DeathRate, Country, Region } from "../../../ldm/full";
const style = {
    height: 300,
};
export const HeatmapExample = () => {
    return (
        <div style={style} className="s-heat-map">
            <Heatmap measure={DeathRate.Sum} rows={Country.Default} columns={Region} />
        </div>
    );
};
