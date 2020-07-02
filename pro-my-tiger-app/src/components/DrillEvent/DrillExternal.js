// (C) 2007-2019 GoodData Corporation
import React, { useState } from "react";
import fetch from "isomorphic-fetch";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LoadingComponent, ErrorComponent, HeaderPredicates } from "@gooddata/sdk-ui";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newPositiveAttributeFilter, attributeIdentifier } from "@gooddata/sdk-model";
import { DeathRate, Region, Country, Duration, City, Population } from "../../ldm/full";
import { EmployeeProfile } from "./EmployeeProfile";
export const DrillWithExternalDataExample = () => {
    const [componentState, setState] = useState({
        state: null,
        location: null,
        employee: null,
        employee3rdPartyData: {
            error: null,
            isLoading: false,
            data: null,
        },
    });

    const onLocationDrill = drillTarget => {
        const { title: name, identifier } =
            drillTarget.drillContext.element === "bar"
                ? drillTarget.drillContext.intersection[1].header.attributeHeaderItem
                : drillTarget.drillContext.points[0].intersection[1].header.attributeHeaderItem;
        const location = {
            name,
            identifier,
        };
        setState(oldState => ({ ...oldState, location, state: null }));
    };

    const onStateDrill = drillTarget => {
        const { name, id } = drillTarget.drillContext.row[0];
        const state = {
            name,
            identifier: `${DeathRate.Sum}/elements?id=${id}`,
        };
        setState(oldState => ({ ...oldState, state, location: null }));
    };

    const onStateClear = () => setState(oldState => ({ ...oldState, state: null }));

    const onLocationClear = () => setState(oldState => ({ ...oldState, location: null }));

    const onEmployeeDrill = drillTarget => {
        const employee = drillTarget.drillContext.row[0];
        setState(oldState => ({
            ...oldState,
            employee,
            employee3rdPartyData: {
                error: null,
                isLoading: true,
                data: null,
            },
        }));
        const firstName = employee.name.split(" ")[0];
        fetch(`https://api.genderize.io/?name=${firstName}&country_id=us`)
            .then(res => res.json())
            .then(({ gender }) => {
                return fetch(
                    `https://randomuser.me/api/?nat=us&inc=dob,cell,registered,location&gender=${gender}&seed=gooddata-${employee.id}`,
                )
                    .then(res => res.json())
                    .then(({ results }) => {
                        setState(oldState => ({
                            ...oldState,
                            employee3rdPartyData: {
                                isLoading: false,
                                error: null,
                                data: { ...results[0], id: employee.id, gender },
                            },
                        }));
                    })
                    .catch(() => {
                        setState(oldState => ({
                            ...oldState,
                            employee3rdPartyData: {
                                isLoading: false,
                                error: null,
                                data: {
                                    dob: {
                                        date: new Date(),
                                    },
                                    registered: {
                                        date: new Date(),
                                    },
                                    cell: "123456",
                                    location: {
                                        city: "Sample City",
                                        state: "Sample State (load failed)",
                                    },
                                    id: employee.id,
                                    gender,
                                },
                            },
                        }));
                    });
            });
    };

    const getFilters = (state, location) => {
        const filters = [];

        if (state) {
            filters.push(
                newPositiveAttributeFilter(Country.Default, {
                    uris: [state.identifier],
                }),
            );
        }

        if (location) {
            filters.push(
                newPositiveAttributeFilter(Country.Default, {
                    uris: [location.identifier],
                }),
            );
        }

        return filters;
    };

    const renderEmployeeDetails = employeeData => {
        if (employeeData.isError) {
            return <ErrorComponent height={150} message="There was an error getting employee details" />;
        } else if (employeeData.isLoading) {
            return <LoadingComponent height={150} />;
        } else if (employeeData.data) {
            return <EmployeeProfile {...employeeData.data} />;
        }

        return null;
    };

    const { state, location } = componentState;
    const stateTable = (
        <div
            style={{
                height: 200,
            }}
            className="s-state-table"
        >
            <PivotTable
                measures={[Duration.Sum]}
                rows={[Country.Default]}
                drillableItems={[HeaderPredicates.identifierMatch(attributeIdentifier(Country.Default))]}
                onDrill={onStateDrill}
            />
        </div>
    );
    const employeeTableFilters = getFilters(state, location);
    // const employeeTable = (
    //     <div
    //         style={{
    //             height: 300,
    //         }}
    //         className="s-employee-table"
    //     >
    //         <PivotTable
    //             measures={[DeathRate.Sum]}
    //             rows={[City]}
    //             drillableItems={[HeaderPredicates.identifierMatch(attributeIdentifier(City))]}
    //             filters={employeeTableFilters}
    //             onDrill={onEmployeeDrill}
    //         />
    //     </div>
    // );
    const salesTableFilters = getFilters(state, location);
    const totalSalesChart = (
        <div
            style={{
                height: 300,
            }}
            className="s-sales-chart"
        >
            <ColumnChart
                measures={[Population.Sum]}
                viewBy={Country.Default}
                filters={salesTableFilters}
                drillableItems={[HeaderPredicates.identifierMatch(attributeIdentifier(Country.Default))]}
                onDrill={onLocationDrill}
            />
        </div>
    );
    const { employee, employee3rdPartyData } = componentState;
    const employeeDetails = renderEmployeeDetails(employee3rdPartyData);
    return (
        <div className="layout-wrapper">
            {/* language=CSS */}
            <style>{`
                .layout-wrapper {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    grid-column-gap: 20px;
                    grid-row-gap: 20px;
                    grid-template-rows: auto;
                }
                h3 {
                    margin-top: 0;
                    border-bottom: 2px solid #14b2e2;
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                }
                .employeeTable {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .employeeTableWrapper {
                    position: relative;
                    height: 100%;
                    flex: 1 0 auto;
                }
                .details {
                    padding-left: 20px;
                }
                .employeesHeading {
                    margin-top: 20px;
                }
            `}</style>
            <div>
                <h3>States</h3>
                {stateTable}
                <h3>
                    {!state && !location ? "All Employees" : "Employees from "}
                    {state && (
                        <span>
                            {state.name}&nbsp;
                            <button
                                onClick={onStateClear}
                                className="gd-button gd-button-primary gd-button-small gd-button-icon-only icon-cross s-employee-heading-clear-state"
                            />
                        </span>
                    )}
                    {location && (
                        <span>
                            {location.name}&nbsp;
                            <button
                                onClick={onLocationClear}
                                className="gd-button gd-button-primary gd-button-small gd-button-icon-only icon-cross s-employee-heading-clear-location"
                            />
                        </span>
                    )}
                </h3>
                {/* {employeeTable} */}
            </div>
            <div className="details">
                <h3>
                    Sales from {!state && !location && "All Locations"}
                    {state && (
                        <span>
                            {state.name}&nbsp;
                            <button
                                onClick={onStateClear}
                                className="gd-button gd-button-primary gd-button-small gd-button-icon-only icon-cross s-sales-heading-clear-state"
                            />
                        </span>
                    )}
                    {location && (
                        <span>
                            {location.name}&nbsp;
                            <button
                                onClick={onLocationClear}
                                className="gd-button gd-button-primary gd-button-small gd-button-icon-only icon-cross s-sales-heading-clear-location"
                            />
                        </span>
                    )}
                </h3>
                {totalSalesChart}
                {employee && (
                    <div>
                        <h3 className="s-employee-name">{employee.name}</h3>
                        {employeeDetails}
                    </div>
                )}
            </div>
        </div>
    );
};
