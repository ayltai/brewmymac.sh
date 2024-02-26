import Grid from '@mui/material/Grid';
import React, { Children, FC, } from 'react';
import type { GridViewProps, } from './GridView.types';

/**
 * A layout that displays one or more children in a grid.
 * @param children The content of the component
 * @param rest Other props
 */
export const GridView : FC<GridViewProps> = ({
    children,
    ...rest
}) => (
    <Grid
        container
        rowSpacing={2}
        justifyContent='flex-start'
        {...rest}>
        {Children.toArray(children).map(child => (
            <Grid
                key={(child as any).key}
                item
                paddingX={1}
                xs={12}
                sm={6}
                lg={4}>
                {child}
            </Grid>
        ))}
    </Grid>
);
