import React from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";
import { Country, DeathRate, Duration } from "../../../ldm/full";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";

const changeMeasure = newArithmeticMeasure([DeathRate.Sum, Duration.Sum], "SUM", m => m.title("AM"));
const filters = newPositiveAttributeFilter(Country.Default, ["Angola", "Japan", "Cuba"]);
const style = {
    height: 300,
};
export const BulletChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BulletChart
                primaryMeasure={DeathRate.Sum}
                targetMeasure={Duration.Sum}
                viewBy={Country.Default}
                filters={[filters]}
            />
        </div>
    );
};
