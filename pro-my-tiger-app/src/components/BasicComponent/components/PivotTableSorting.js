import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newAttributeSort, modifyAttribute } from "@gooddata/sdk-model";
import { DeathRate, Deaths, Country, EventDateDate, City } from "../../../ldm/full";
const measures = [DeathRate.Sum, Deaths.Sum];
const attributes = [Country.Location, modifyAttribute(Country.Default, a => a.localId("location"))];
const config = {
    menu: {
        aggregations: true,
        aggregationsSubMenu: true,
    },
};
const columns = [City];
// const sortBy = [newAttributeSort("location", "asc")];
const style = {
    height: 300,
};
export const PivotTableSortingExample = () => {
    return (
        <div style={style} className="s-pivot-table-sorting">
            <PivotTable
                measures={measures}
                rows={attributes}
                columns={columns}
                pageSize={20}
                // sortBy={sortBy}
                config={config}
            />
        </div>
    );
};
