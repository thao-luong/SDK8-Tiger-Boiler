import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import {
    newArithmeticMeasure,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
    idRef,
} from "@gooddata/sdk-model";
import { Deaths, DeathRate, PhonesPer1k, Country } from "../../../ldm/full";
const changeMeasure = newArithmeticMeasure([Deaths.Sum, PhonesPer1k.Sum], "sum", m => m.title("AM"));
const measures = [Deaths.Sum, PhonesPer1k.Sum, changeMeasure];
const rows = [Country.Default];
const style = {
    height: 200,
};
const filters = newPositiveAttributeFilter(idRef("customer.nation_name"), ["CANADA", "CHINA", "BRAZIL"]);
export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-table">
            <ColumnChart measures={measures} viewBy={rows} filters={[filters]} />
        </div>
    );
};
