import React from "react";
import "./App.css";
import { Alert, Divider, Input, Layout, Typography } from "antd";
import GlobalSummary from "./components/GlobalSummary";
import CountryTable, {
  CountryData,
  toTableRecord,
} from "./components/CountryTable";
import useCountrySearch from "./hooks/useCountrySearch";
import useGetData from "./hooks/useGetData";

const { Title, Text } = Typography;

const countrySearchOptions = {
  keys: ["Country"],
  threshold: 0.2,
};

function App(): JSX.Element {
  const { data, errorMessage } = useGetData();

  const dateStr = JSON.parse(JSON.stringify(data.Date));
  const date = new Date(dateStr);

  const globalData = data.Global;
  const countryData = data.Countries;

  const { results, setSearchTerm } = useCountrySearch<CountryData>({
    data: countryData,
    options: countrySearchOptions,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const countryTableRecords = results.map(toTableRecord);

  return (
    <div className="App">
      {errorMessage ? (
        <Alert message={errorMessage} type="error" closable />
      ) : null}
      <Title style={{ paddingTop: 18, textAlign: "center" }}>
        COVID-19 Live Summary
      </Title>
      <div style={{ textAlign: "center" }}>
        <Text code ellipsis={true}>{`updated: ${date}`}</Text>
      </div>
      <Divider style={{ marginTop: 24, color: "#1890ff" }}>
        Global Summary
      </Divider>
      <GlobalSummary globalData={globalData} />
      <Divider style={{ color: "#1890ff" }}>By Country</Divider>
      <Layout
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Input
          placeholder="Search Country"
          allowClear
          onChange={handleSearch}
          style={{ marginBottom: 8, width: "33%", alignSelf: "flex-end" }}
        />
        <CountryTable countryTableRecords={countryTableRecords} />
      </Layout>
    </div>
  );
}

export default App;
