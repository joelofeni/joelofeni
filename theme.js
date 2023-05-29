import { createTheme } from "@mui/material/styles";

export const  Colors = {
    primary: '#4a148c',
    secondary:'#bf360c',
    success:'#22bb33',
    info:'#5bc0de',
    danger: '#bb2124',
    warning: '#bb2124',
    dark: '#0e1b20',
    light: '#aaa',
    muted: '#abafb3',
    border: '#6e43a3',
    inverse: '#2F3D4A' ,
    shaft: '#333',
    ///////////////////////////
    // Greys
    ///////////////////////////
    dim_grey:"#696969",
    dove_gray:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_gray:"rgb(235,235,235)",
    ///////////////////////////
    // Solid color
    ///////////////////////////
    white:"#fff",
    black:"#000",
};

const theme = createTheme({
    palette: {
            primary:{
                main: Colors.primary,
            },
            secondary:{
                main: Colors.secondary,
            }
        },
        components: {
            
        }

});

export default theme;
