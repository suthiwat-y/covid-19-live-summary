import React from "react";
import { Table, Typography } from "antd";
import { renderNumber } from "../utils/renderNumber";

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

export const toTableRecord = ({
  Country,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
}: CountryData): CountryTableRecord => {
  return {
    country: Country,
    totalConfirmed: TotalConfirmed,
    totalDeaths: TotalDeaths,
    totalRecovered: TotalRecovered,
    totalConfirmedRepresentation: renderNumber(TotalConfirmed),
    totalDeathsRepresentation: renderNumber(TotalDeaths),
    totalRecoveredRepresentation: renderNumber(TotalRecovered),
  };
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
        ellipsis={true}
        dataIndex="country"
        key="country"
      />
      <Column<CountryTableRecord>
        title={<TableField title={"Total Cases"} />}
        width={"25%"}
        align={"center"}
        ellipsis={true}
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
        ellipsis={true}
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
        ellipsis={true}
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
    <Typography.Text
      ellipsis={true}
      style={{ fontWeight: "bold", fontSize: "1rem" }}
    >
      {title}
    </Typography.Text>
  );
};

export default CountryTable;
