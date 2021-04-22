import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { renderNumber } from "../utils/renderNumber";

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
      gutter={[16, 24]}
      style={{
        justifyContent: "space-evenly",
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <Col>
        <Card
          title="Total Confirmed Cases"
          style={{
            backgroundColor: "#222",
            padding: 18,
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <Typography.Text strong={true} ellipsis={true}>
            {renderNumber(globalData.TotalConfirmed)}
          </Typography.Text>
        </Card>
      </Col>
      <Col>
        <Card
          title="Total Deaths"
          style={{
            backgroundColor: "#222",
            padding: 18,
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <Typography.Text
            strong={true}
            ellipsis={true}
            style={{ color: "#dd0000" }}
          >
            {renderNumber(globalData.TotalDeaths)}
          </Typography.Text>
        </Card>
      </Col>
      <Col>
        <Card
          title="Total Recovered"
          style={{
            backgroundColor: "#222",
            padding: 18,
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <Typography.Text
            strong={true}
            ellipsis={true}
            style={{ color: "#00dd00" }}
          >
            {renderNumber(globalData.TotalRecovered)}
          </Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default GlobalSummary;
