import { Box, Card, CardActions, CardActionArea, CardContent, Tooltip, } from '@mui/material';
import React, { FC, Fragment, } from 'react';

import { TruncatedTypography, } from '../TruncatedTypography';
import type { CardViewProps, } from './CardView.types';

/**
 * A card view that displays the title, subtitle, description, and optionally one or more buttons.
 * @param title Title of the card
 * @param subtitle Subtitle of the card
 * @param description Description of the card
 * @param onClick Function to call when the button is clicked
 * @param children One or more buttons
 * @param rest Other props
 */
export const CardView : FC<CardViewProps> = ({
    title,
    subtitle,
    description,
    children,
    onClick,
    ...rest
}) => (
    <Card
        variant='outlined'
        {...rest}>
        <CardActionArea onClick={onClick}>
            <CardContent>
                <Tooltip title={title}>
                    <TruncatedTypography variant='h5'>
                        {title}
                    </TruncatedTypography>
                </Tooltip>
                <TruncatedTypography color='text.secondary'>
                    {subtitle}
                </TruncatedTypography>
                <Tooltip title={description}>
                    <TruncatedTypography
                        height='2lh'
                        variant='body2'
                        lines={2}>
                        {description}
                    </TruncatedTypography>
                </Tooltip>
            </CardContent>
        </CardActionArea>
        {children !== undefined && (
            <CardActions>
                <Fragment>
                    <Box flexGrow={1} />
                    {children}
                </Fragment>
            </CardActions>
        )}
    </Card>
);
