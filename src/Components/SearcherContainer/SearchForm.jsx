import React, { useState, useEffect } from 'react'
import { Grid, TextField, Typography } from "@material-ui/core"
import { Button } from 'bootstrap'


// searchfrom Component must take in a setter function as props =>
// the data will be pass to outsite display class
const SearchForm = (props) => {


    return <Grid container style={{ margin: "2rem", height: "fit-content"}} spacing={2}>
        <Grid item xs={12} >
            <TextField
                label="Description"
                variant="outlined"
                type="text"
                fullWidth
            /></Grid>

        <Grid item xs={4}>
            <TextField
                label="Froms date"
                variant="outlined"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
            /></Grid>
        <Grid item xs style={{ width: "fit-content",display:"flex"  }}>
            <Typography style={{margin:"auto"}}variant="h6">to</Typography></Grid>
        <Grid item xs={4}>
            <TextField
                label="End date"
                variant="outlined"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
        </Grid>
        <Grid item xs >
            <Button
                label="test button"
            />
        </Grid>
    </Grid>
}


export default SearchForm;