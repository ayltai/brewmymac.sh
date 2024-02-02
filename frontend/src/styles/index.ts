export const appTheme = {
    palette : {
        primary : {
            main : '#29B6F6',
        },
        secondary : {
            main : '#FFA726',
        },
    },
    components : {
        MuiButton      : {
            styleOverrides : {
                root : {
                    padding       : '8px 22px',
                    borderRadius  : '2rem',
                    textTransform : 'none',
                },
            },
        },
        MuiCard       : {
            styleOverrides : {
                root : {
                    borderRadius : '0.6rem',
                },
            },
        },
        MuiCardActions : {
            styleOverrides : {
                root : {
                    padding : 16,
                },
            },
        },
    },
};
