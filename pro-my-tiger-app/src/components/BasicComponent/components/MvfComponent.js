import React from "react";
import { measureLocalId } from "@gooddata/sdk-model";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { DeathRate, Country } from "../../../ldm/full";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
const measureTitle = "Franchised Sales";
const measures = [DeathRate.Sum];
const attributes = [Country.Default];
const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};
export class MeasureValueFilterComponentExample extends React.PureComponent {
    state = {
        filters: [],
    };
    onApply = filter => {
        this.setState({
            filters: [filter ?? defaultFilter],
        });
    };

    render() {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    measureIdentifier={measureLocalId(DeathRate.Sum)}
                />
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-pivot-table"
                >
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </React.Fragment>
        );
    }
}
export default MeasureValueFilterComponentExample;
