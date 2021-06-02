import React, { useMemo } from "react";

import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";

import Home from "./Home";

interface ComponentProps {
}

let App: React.FC<ComponentProps> = () => {
    const muiTheme = useMemo(() => {
        return createMuiTheme({
            palette: {
                type: "dark"
            }
        });
    }, []);

    return <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {/* <Home /> */}
        <video 
        src="https://drive.google.com/uc?export=download&id=10vmvQy-CxZnX5b6t857fchSjwb3haSzR" autoPlay controls 
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
         />
    </MuiThemeProvider>;
};

export default App;
