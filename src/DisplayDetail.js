import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function DisplayDetail(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography variant="h3" gutterBottom align="center">
          {props.name}, {props.country}{" "}
        </Typography>
        <Card>
          <CardContent>
            <CardMedia image={props.image} sx={{ width: 80, height: 80 }} />
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item xs={6}>
                <Typography> Temperature </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  {" "}
                  {props.temp_c}
                  {"\u00B0C"}/{props.temp_f}
                  {"\u00B0F"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography> Condition </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography>{props.condition}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography> Wind Speed </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography>{props.windSpeed}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography> Humidity </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography>{props.humidity}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography> Cloud Coverage </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography>{props.cloud}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography> Last Updated </Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Typography>{props.lstupdate}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
