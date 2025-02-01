import { Poppins, Source_Code_Pro } from 'next/font/google';
import { createTheme, virtualColor } from '@mantine/core';

const poppins = Poppins({
    weight: '400',
});
const sourceCodePro = Source_Code_Pro({
    weight: '400',
});

const theme = createTheme({
    // components
    components: {},

    // colors
    colors: {
        primary: virtualColor({
            name: 'primary',
            light: 'violet',
            dark: 'grape',
        }),
        secondary: virtualColor({
            name: 'secondary',
            light: 'teal',
            dark: 'green',
        }),
    },

    // typography
    fontFamily: poppins.style.fontFamily,
    fontFamilyMonospace: sourceCodePro.style.fontFamily,
    headings: {
        fontFamily: poppins.style.fontFamily,
    }
});

export default theme;