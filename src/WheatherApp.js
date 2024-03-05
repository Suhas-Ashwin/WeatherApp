import axios from "axios";
import { useEffect, useState } from "react";
import Bar from "./Bar.js";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DisplayDetail from "./DisplayDetail.js";

export default function WeatherApp(props) {
  const [location, setLocation] = useState("");
  const [debounceTimeout, setdebounceTimeout] = useState(0);
  const [isfetch, setfetch] = useState(false);
  const [data, setData] = useState({});
  const [isfetchErr, setfetchErr] = useState(false);

  const fetchLocationAPI = async (location) => {
    let URL =
      "https://api.weatherapi.com/v1/current.json?key=f6d04433e42c44ec85575614232510&q=";
    if (location.length > 0) {
      try {
        const response = await axios.get(URL + location);
        setfetch(true);
        setData(response.data);
      } catch (e) {
        setfetchErr(true);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (debounceTimeout !== 0) {
      clearTimeout(debounceTimeout);
    }
    const timer = setTimeout(() => fetchLocationAPI(location), 500);

    setdebounceTimeout(timer);
  }, [location]);

  return (
    <Box>
      <Bar />
      <Stack alignItems="center">
        <TextField
          id="search-bar"
          label="Enter location"
          variant="outlined"
          margin="normal"
          size="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {isfetch ? (
          <DisplayDetail
            name={data.location.name}
            country={data.location.country}
            image={data.current.condition.icon}
            temp_c={data.current.temp_c}
            temp_f={data.current.temp_f}
            condition={data.current.condition.text}
            windSpeed={data.current.wind_kph}
            humidity={data.current.humidity}
            cloud={data.current.cloud}
            lstupdate={data.current.last_updated}
          />
        ) : isfetchErr ? (
          <Typography align="center" variant="h4" color="error">
            No matching location found.
          </Typography>
        ) : (
          <div></div>
        )}
      </Stack>
    </Box>
  );
}
