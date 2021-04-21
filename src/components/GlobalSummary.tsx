import { Col, Row, Statistic } from "antd";
import React from "react";

type GlobalData = {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

interface GlobalSummaryProps {
  globalData: GlobalData;
}

const GlobalSummary: React.FC<GlobalSummaryProps> = ({ globalData }) => {
  return (
    <Row
      style={{
        justifyContent: "space-evenly",
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <Col style={{ width: "24%" }}>
        <Statistic
          title="Total Confirmed Cases"
          value={
            globalData.TotalConfirmed ? globalData.TotalConfirmed : "unreported"
          }
          valueStyle={{ fontWeight: "bold" }}
          style={{
            backgroundColor: "#222",
            padding: 24,
            textAlign: "center",
            textSizeAdjust: "auto",
          }}
        />
      </Col>
      <Col style={{ width: "24%" }}>
        <Statistic
          title="Total Deaths"
          value={globalData.TotalDeaths ? globalData.TotalDeaths : "unreported"}
          valueStyle={{
            color: "#dd0000",
            fontWeight: "bold",
          }}
          style={{
            backgroundColor: "#222",
            padding: 24,
            textAlign: "center",
            textSizeAdjust: "auto",
          }}
        />
      </Col>
      <Col style={{ width: "24%" }}>
        <Statistic
          title="Total Recovered"
          value={
            globalData.TotalRecovered ? globalData.TotalRecovered : "unreported"
          }
          valueStyle={{
            color: "#00dd00",
            fontWeight: "bold",
          }}
          style={{
            backgroundColor: "#222",
            padding: 24,
            textAlign: "center",
            textSizeAdjust: "auto",
          }}
        />
      </Col>
    </Row>
  );
};

export default GlobalSummary;
