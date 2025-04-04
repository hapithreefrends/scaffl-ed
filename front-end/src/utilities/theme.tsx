import { Poppins, Source_Code_Pro } from "next/font/google";
import { createTheme, virtualColor } from "@mantine/core";

// const poppins = Poppins({
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const sourceCodePro = Source_Code_Pro();

const theme = createTheme({
    // components
    components: {},

    // colors
    colors: {
        primary: virtualColor({
            name: "primary",
            light: "violet",
            dark: "grape",
        }),
        primaryComplement: virtualColor({
            name: "primary-complement",
            light: "grape",
            dark: "violet",
        }),
        secondary: virtualColor({
            name: "secondary",
            light: "teal",
            dark: "green",
        }),
        secondaryComplement: virtualColor({
            name: "secondary-complement",
            light: "green",
            dark: "teal",
        }),
    },

    // typography
    // fontFamily: poppins.style.fontFamily,
    // fontFamilyMonospace: sourceCodePro.style.fontFamily,
    // headings: {
    //     fontFamily: poppins.style.fontFamily,
    //     fontWeight: "600"
    // }
});

export default theme;