import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { DetailsViewProps, } from './DetailsView.types';

/**
 * A details view displays a title and content.
 * @param color The color of the component
 * @param description The description of the component
 * @param infoUrl The URL of the information
 * @param rest Other props
 */
export const DetailsView : FC<DetailsViewProps> = ({
    color = 'primary',
    description,
    infoUrl,
    ...rest
}) => {
    const { children, } = rest;

    const { t, } = useTranslation();

    return (
        <Stack
            spacing={2}
            {...rest}>
            <Box>
                <Typography
                    variant='overline'
                    fontWeight='bold'>
                    {t('common.description')}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
            {infoUrl && (
                <Box>
                    <Typography
                        variant='overline'
                        fontWeight='bold'>
                        {t('common.website')}
                    </Typography>
                    <Link
                        color={color}
                        href={infoUrl}
                        target='_blank'>
                        <Typography>
                            {infoUrl}
                        </Typography>
                    </Link>
                </Box>
            )}
            {children}
        </Stack>
    );
};
