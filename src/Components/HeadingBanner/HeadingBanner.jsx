import { Grid, Typography, Grow } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import headingBg from "../../assets/img/headingBg.jpg"

const HeadingBanner = (props) => {
    const [bgIn, setBgIn] = useState(false);
    const [headingIn, setHeadingin] = useState(false);
    const [lowerTextIn, setLowerTextIn] = useState(false);
    const [searchTextIn, setSearchTextIn] = useState(false);

    const [useInit, setUseInit] = useState(true);
    //use effect chain to let element come in one by one
    useEffect(() => {

        if (useInit) {
            setTimeout(() => {
                setBgIn(true)
            }, 300);

            setTimeout(() => {
                setHeadingin(true)
            }, 700);

            setTimeout(() => {
                setLowerTextIn(true)
            }, 1000);

            setTimeout(() => {
                setSearchTextIn(true)
            }, 1200);
            setUseInit(false);
        }
    })






    return <>
        {/* use grid with full width */}
        {/* negative top makes it over the navbar, create a over lapping backgroung heading */}
        {/* negative zIndex makes it go to the back */}
        <Grid style={{ zIndex: "-99", overflow: "hidden", position: "absolute", left: "0", top: "-5vh" }} container spacing={0}>
            <Grow in={bgIn}>
                <Grid item xs={12} style={{ padding: "0px", maxHeight: "100vh", overflow: "hidden" }}>
                    {/* using heading image  */}
                    <img style={{ maxWidth: "130%", minHeight: "100vh", bottom: "0" }} src={headingBg} />
                </Grid>
            </Grow>

        </Grid>



        {/* some heading text for searcher */}

        <Grow in={headingIn}>
            <Grid container style={{ position: "absolute", top: "20vh" }} spacing={0}>
                <Grid item xs style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center"
                }}>
                    <Typography variant="h2" style={{ color: "#FFF", fontWeight: "bold" }}>Searcher</Typography>

                    <Grow in={lowerTextIn}>
                        <Typography variant="h6" style={{ color: "#FFF" }}>Developed by Nick, Student Id: 17970654</Typography>
                    </Grow>



                    <Grow in={searchTextIn}>
                        <Typography variant="h6" style={{ color: "#FFF", marginTop: "5vh" }}>Every search must has a begining, Why not start it here</Typography>
                    </Grow>

                </Grid>
            </Grid>
        </Grow>

    </>
}

export default HeadingBanner;
