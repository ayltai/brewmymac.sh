import { Box, } from '@mui/material';
import React, { FC, } from 'react';
import { TypeAnimation, } from 'react-type-animation';

import './terminal.css';
import background from './terminal.png';
import type { TerminalProps, } from './Terminal.types';

/**
 * A terminal animates the typing of commands.
 * @param commands The commands to type
 * @param rest Other props
 */
export const Terminal : FC<TerminalProps> = ({
    commands,
    ...rest
}) => (
    <Box
        sx={{
            backgroundImage : `url(${background})`,
        }}
        position='relative'
        width={747}
        height={341}
        {...rest}>
        <TypeAnimation
            style={{
                position   : 'absolute',
                width      : 636,
                left       : 0,
                top        : 0,
                marginLeft : 52,
                marginTop  : 48,
                color      : 'white',
                fontSize   : '1rem',
                fontFamily : 'monospace',
                wordBreak  : 'break-all',
            }}
            className='type'
            speed={24}
            deletionSpeed={96}
            sequence={commands}
            repeat={Infinity} />
    </Box>
);
