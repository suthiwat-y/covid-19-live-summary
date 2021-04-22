import axios from "axios";
import { useEffect, useState } from "react";
import { CountryData } from "../components/CountryTable";

export type Covid19Data = {
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

const url = "https://api.covid19api.com/summary";

export default function useGetData(): {
  data: Covid19Data;
  errorMessage: string;
} {
  const [data, setData] = useState(emptyData);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data: Covid19Data = response.data;
        setData(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          setErrorMessage(
            "Error: The request was made but no response was received."
          );
          console.log(error.request);
        } else {
          setErrorMessage("Unknown Error.");
          console.log("Error", error.message);
        }
        console.log(error);
      });
  }, []);

  return { data, errorMessage };
}
