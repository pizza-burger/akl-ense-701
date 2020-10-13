import { Grid, Grow, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

import SearchForm from "./SearchForm.jsx"

const SearcherRoot = (props) => {
    const [gridIn, setGridIn] = useState(false);
    const [useInit, setUseInit] = useState(true);
    const [searchingData, setSearchingData] = useState(null)



    useEffect(() => {
        console.log("searchingData changed")


    }, [searchingData])

    useEffect(() => {
        if (useInit) {
            setTimeout(() => {
                setGridIn(true)
            }, 1200);


            setUseInit(false)
        }

    })


    return <Grow in={gridIn} style={{minHeight:"80vh"}}>
        <Grid container style={{ backgroundColor: "#FFF", position: "relative", border: "1px solid #888", marginLeft: "2vw", marginRight: "2vw", marginTop: "40vh", width: "auto", borderRadius: "2rem" }}>

            <SearchForm />






            <Grid item xs={12} style={{ bottom: "0", position: "absolute", textAlign: "center", width: "100%" }}>
                <Typography variant="h5" >
                    Every journey has an end, let's start another one
            </Typography>


            </Grid>

        </Grid>
    </Grow>
}

export default SearcherRoot;
