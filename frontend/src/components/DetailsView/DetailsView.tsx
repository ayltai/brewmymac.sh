import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { DetailsViewProps, } from './DetailsView.types';

/**
 * @param description The description of the component
 * @param infoUrl The URL of the information
 * @param children The content of the component
 * @param rest Other props
 */
export const DetailsView : FC<DetailsViewProps> = ({
    description,
    infoUrl,
    children,
    ...rest
}) => {
    const { t, } = useTranslation();

    return (
        <Stack
            spacing={2}
            {...rest}>
            <Box>
                <Typography variant='caption'>
                    {t('common.description')}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
            {infoUrl && (
                <Box>
                    <Typography variant='caption'>
                        {t('common.website')}
                    </Typography>
                    <Link
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
