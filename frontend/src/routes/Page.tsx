import { Box, } from '@mui/material';
import React from 'react';
import { Outlet, } from 'react-router-dom';

import { Footer, } from '../components';
import { useAppSelector, } from '../hooks';

export const Page = () => {
    const { themeMode, } : { themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    return (
        <Box
            sx={{
                backgroundImage : themeMode === 'dark' ? 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMzQsIDM2LCAzOCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgzOCwgNTAsIDU2LCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjQuMSwtNy45QzI2LjIsLTEuMywxOS41LDguMSw5LjksMTUuNUMwLjMsMjIuOCwtMTIsMjguMiwtMTcuOSwyNC4xQy0yMy43LDIwLC0yMyw2LjQsLTE5LC0yLjlDLTE0LjksLTEyLjIsLTcuNCwtMTcuMSwxLjgsLTE3LjdDMTEsLTE4LjMsMjIsLTE0LjUsMjQuMSwtNy45WiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIC8+Cjwvc3ZnPg==)' : 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMjI4LCAyMzIsIDIzNCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgyMzYsIDIzOSwgMjQxLCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjQuMSwtNy45QzI2LjIsLTEuMywxOS41LDguMSw5LjksMTUuNUMwLjMsMjIuOCwtMTIsMjguMiwtMTcuOSwyNC4xQy0yMy43LDIwLC0yMyw2LjQsLTE5LC0yLjlDLTE0LjksLTEyLjIsLTcuNCwtMTcuMSwxLjgsLTE3LjdDMTEsLTE4LjMsMjIsLTE0LjUsMjQuMSwtNy45WiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIC8+Cjwvc3ZnPg==)',
                backgroundPosition   : 'center',
                backgroundSize       : '150%',
                backgroundAttachment : 'fixed',
                backgroundRepeat     : 'no-repeat',
            }}
            width='100%'>
            <Outlet />
            <Footer />
        </Box>
    );
};
