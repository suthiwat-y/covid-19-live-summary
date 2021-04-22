import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Divider, Input, Layout, Typography } from "antd";
import GlobalSummary from "./components/GlobalSummary";
import CountryTable, {
  CountryData,
  toTableRecord,
} from "./components/CountryTable";
import useCountrySearch from "./hooks/useCountrySearch";

const { Title, Text } = Typography;

const url = "https://api.covid19api.com/summary";

type Covid19Data = {
  ID: string;
  Message: string;
  Global: {
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  };
  Countries: CountryData[];
  Date: string;
};

const emptyData: Covid19Data = {
  ID: "",
  Message: "",
  Global: { TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0 },
  Countries: [],
  Date: "",
};

const countrySearchOptions = {
  keys: ["Country"],
  threshold: 0.2,
};

function App() {
  const [data, setData] = useState(emptyData);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data: Covid19Data = response.data;
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
