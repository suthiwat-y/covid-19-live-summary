import React from "react";
import { Table, Typography } from "antd";

const { Column } = Table;

type NumOfCases = number | string;

export type CountryData = {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

export type CountryTableRecord = {
  country: string;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
  totalConfirmedRepresentation: NumOfCases;
  totalDeathsRepresentation: NumOfCases;
  totalRecoveredRepresentation: NumOfCases;
};

interface CountryTableProps {
  countryTableRecords: CountryTableRecord[];
}

type SortOrder = "descend" | "ascend";

const sortDirections: SortOrder[] = ["descend", "ascend", "descend"];

const CountryTable: React.FC<CountryTableProps> = ({ countryTableRecords }) => {
  return (
    <Table dataSource={countryTableRecords} style={{ width: "100%" }}>
      <Column<CountryTableRecord>
        title={<TableField title={"Country"} />}
        width={"25%"}
        dataIndex="country"
        key="country"
      />
      <Column<CountryTableRecord>
        title={<TableField title={"Total Cases"} />}
        width={"25%"}
        align={"center"}
        dataIndex="totalConfirmedRepresentation"
        key="totalConfirmedRepresentation"
        sorter={(a, b) => {
          return a.totalConfirmed - b.totalConfirmed;
        }}
        defaultSortOrder="descend"
        sortDirections={sortDirections}
      />
      <Column<CountryTableRecord>
        title={<TableField title={"Total Deaths"} />}
        width={"25%"}
        align={"center"}
        dataIndex="totalDeathsRepresentation"
        key="totalDeathsRepresentation"
        sorter={(a, b) => {
          return a.totalDeaths - b.totalDeaths;
        }}
        sortDirections={sortDirections}
      />
      <Column<CountryTableRecord>
        title={<TableField title={"Total Recovered"} />}
        width={"25%"}
        align={"center"}
        dataIndex="totalRecoveredRepresentation"
        key="totalRecoveredRepresentation"
        sorter={(a, b) => {
          return a.totalRecovered - b.totalRecovered;
        }}
        sortDirections={sortDirections}
      />
    </Table>
  );
};

const TableField: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography.Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
      {title}
    </Typography.Text>
  );
};

export default CountryTable;
