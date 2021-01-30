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
        <Home />
    </MuiThemeProvider>;
};

export default App;
