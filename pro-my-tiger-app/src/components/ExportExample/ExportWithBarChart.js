import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newAbsoluteDateFilter, idRef } from "@gooddata/sdk-model";
import { ExampleWithExport } from "./Export";
import { Duration, DurationMinutes, Region } from "../../ldm/full";
const measures = [Duration.Sum, DurationMinutes.Sum];
const filters = [newAbsoluteDateFilter(idRef("posted_date.year"), "2011-01-01", "2012-12-31")];
const style = {
    height: 300,
};
export const BarChartExportExample = () => {
    return (
        <ExampleWithExport filters={filters}>
            {onExportReady => (
                <div style={style} className="s-bar-chart">
                    <BarChart
                        measures={measures}
                        viewBy={Region}
                        // filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};
