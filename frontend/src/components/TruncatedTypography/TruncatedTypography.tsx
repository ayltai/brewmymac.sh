import { styled, Typography, } from '@mui/material';
import { FC, } from 'react';

import type { TruncatedTypographyProps, } from './TruncatedTypography.types';

/**
 * A typography component that truncates text.
 * @param lines Number of lines to show
 * @param rest Other props
 */
export const TruncatedTypography : FC<TruncatedTypographyProps> = styled(Typography)(({
    lines = 1,
} : TruncatedTypographyProps) =>({
    display         : '-webkit-box',
    overflow        : 'hidden',
    textOverflow    : 'ellipsis',
    WebkitBoxOrient : 'vertical',
    WebkitLineClamp : lines,
}));
