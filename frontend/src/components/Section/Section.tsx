import { Box, Divider, Stack, Typography, } from '@mui/material';
import React, { FC, } from 'react';

import type { SectionProps, } from './Section.types';

/**
 * A section displays a title and content.
 * @param title The title of the section
 * @param color The color of the title
 * @param children The content of the component
 * @param rest Other props
 */
export const Section : FC<SectionProps> = ({
    title,
    color,
    children,
    ...rest
}) => (
    <Stack {...rest}>
        <Typography
            color={color}
            variant='h4'>
            {title}
        </Typography>
        <Divider />
        <Box paddingTop={2}>
            {children}
        </Box>
    </Stack>
);
