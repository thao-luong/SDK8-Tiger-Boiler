import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newAttributeSort, modifyAttribute } from "@gooddata/sdk-model";
import { M1Title, M2Title, NationName, LReceiptdateDate, CCustkey } from "../../ldm/full";
const measures = [M1Title, M2Title];
const attributes = [NationName.Location, modifyAttribute(NationName.Default, a => a.localId("location"))];
const config = {
    menu: {
        aggregations: true,
        aggregationsSubMenu: true,
    },
};
const columns = [CCustkey.CName];
const sortBy = [newAttributeSort("location", "asc")];
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
                sortBy={sortBy}
                config={config}
            />
        </div>
    );
};
