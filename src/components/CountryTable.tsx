import { Table, Typography } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";

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

const CountryTable: React.FC<CountryTableProps> = ({ countryTableRecords }) => {
  return (
    <Table dataSource={countryTableRecords} style={{ width: "100%" }}>
      <Column<CountryTableRecord>
        title={
          <Typography.Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Country
          </Typography.Text>
        }
        width={"25%"}
        dataIndex="country"
        key="country"
      />
      <Column<CountryTableRecord>
        title={
          <Typography.Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Total Cases
          </Typography.Text>
        }
        width={"25%"}
        align={"center"}
        dataIndex="totalConfirmedRepresentation"
        key="totalConfirmedRepresentation"
        sorter={(a, b) => {
          return a.totalConfirmed - b.totalConfirmed;
        }}
        defaultSortOrder="descend"
        sortDirections={["descend", "ascend", "descend"]}
      />
      <Column<CountryTableRecord>
        title={
          <Typography.Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Total Deaths
          </Typography.Text>
        }
        width={"25%"}
        align={"center"}
        dataIndex="totalDeathsRepresentation"
        key="totalDeathsRepresentation"
        sorter={(a, b) => {
          return a.totalDeaths - b.totalDeaths;
        }}
        sortDirections={["descend", "ascend", "descend"]}
      />
      <Column<CountryTableRecord>
        title={
          <Typography.Text style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Total Recovered
          </Typography.Text>
        }
        width={"25%"}
        align={"center"}
        dataIndex="totalRecoveredRepresentation"
        key="totalRecoveredRepresentation"
        sorter={(a, b) => {
          return a.totalRecovered - b.totalRecovered;
        }}
        sortDirections={["descend", "ascend", "descend"]}
      />
    </Table>
  );
};

export default CountryTable;
