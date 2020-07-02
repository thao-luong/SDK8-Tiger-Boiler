import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Region } from "../../../ldm/full";
const style = {
    height: 300,
};
export const TreemapExample = () => {
    return (
        <div style={style} className="s-tree-map">
            <Treemap measures={[DeathRate.Sum]} viewBy={Country.Default} segmentBy={Region} />
        </div>
    );
};
