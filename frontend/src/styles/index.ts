export const appTheme = {
    palette    : {
        primary    : {
            main : '#1976d2',
        },
        secondary  : {
            main : '#ff9800',
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
        MuiCard        : {
            styleOverrides : {
                root : {
                    borderRadius : '1rem',
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
        MuiDialog      : {
            styleOverrides : {
                paper : {
                    borderRadius : '1rem',
                },
            },
        },
    },
    typography : {
        h1 : {
            fontFamily : 'Fjalla One',
        },
        h2 : {
            fontFamily : 'Fjalla One',
        },
        h3 : {
            fontFamily : 'Fjalla One',
        },
        h4 : {
            fontFamily : 'Fjalla One',
        },
    },
};
