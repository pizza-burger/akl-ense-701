import React, { useState, useEffect } from 'react'


import { AppBar, Toolbar, IconButton,Typography } from "@material-ui/core";


const Navbar = (props) => {


    return <AppBar position="sticky">
        <Toolbar >
            <Typography edge="end" variant="h6" style={{
                color:"#FFF"
            }}>{props.title}</Typography>

        </Toolbar>

    </AppBar>
}

export default Navbar
