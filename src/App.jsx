import React, { useState, useEffect } from "react";
import { Typography, Grid, TextField } from "@material-ui/core";
const App = (props) => {
  const [state, setState] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(state.length);
  }, [state]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid
          item
          xs
          style={{ marginRight: "auto", marginLeft: "auto", display: "flex" }}
        >
          <Typography
            color="primary"
            style={{ textAlign: "center" }}
            variant="h2"
          >
            Hello world
          </Typography>
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Get word count here"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4} style={{ display: "flex" }}>
              <Typography style={{ margin: "auto" }} variant="body2">
                If you are seeing word count changing, react is enabled {`=>`}
                word count: {counter}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
