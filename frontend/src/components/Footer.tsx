import { GitHub, LinkedIn, } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Link, Stack, Typography, useTheme, } from '@mui/material';
import React, { ReactNode, } from 'react';
import { useTranslation, } from 'react-i18next';

const Heading = ({
    children,
} : {
    children : ReactNode,
}) => (
    <Typography
        variant='overline'
        fontWeight='bold'>
        {children}
    </Typography>
);

const LinkItem = ({
    href,
    children,
} : {
    href     : string,
    children : ReactNode,
}) => {
    const theme = useTheme();

    return (
        <Link
            underline='none'
            href={href}
            target='_blank'>
            <Typography
                color={theme.palette.text.secondary}
                variant='body2'>
                {children}
            </Typography>
        </Link>
    );
};

export const Footer = ({
    ...rest
} : {
    [ rest : string ] : any,
}) => {
    const theme = useTheme();

    const { t, } = useTranslation();

    return (
        <Stack
            sx={{
                backgroundColor : theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            }}
            width='100%'
            {...rest}>
            <Divider />
            <Container maxWidth='lg'>
                <Stack
                    paddingY={4}
                    direction='row'
                    alignItems='top'
                    justifyContent='space-between'>
                    <Stack>
                        <Heading>
                            {t('footer.header.product')}
                        </Heading>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh'>
                            {t('footer.product.about')}
                        </LinkItem>
                        <LinkItem href='https://ayltai.medium.com/install-mac-apps-and-tweaks-with-a-single-command-6b1b90c466b5'>
                            {t('footer.product.blog')}
                        </LinkItem>
                    </Stack>
                    <Stack>
                        <Heading>
                            {t('footer.header.support')}
                        </Heading>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh/issues/new?assignees=&labels=help+wanted&projects=&template=help_wanted.md&title='>
                            {t('footer.support.help')}
                        </LinkItem>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title='>
                            {t('footer.support.bugs')}
                        </LinkItem>
                    </Stack>
                    <Stack>
                        <Heading>
                            {t('footer.header.terms')}
                        </Heading>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh/blob/master/TERMS.md'>
                            {t('footer.terms.terms')}
                        </LinkItem>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh/blob/master/DISCLAIMER.md'>
                            {t('footer.terms.disclaimer')}
                        </LinkItem>
                        <LinkItem href='https://github.com/ayltai/brewmymac.sh/blob/master/PRIVACY.md'>
                            {t('footer.terms.privacy')}
                        </LinkItem>
                    </Stack>
                </Stack>
            </Container>
            <Box
                sx={{
                    backgroundColor : theme.palette.common.black,
                }}
                width='100%'>
                <Container maxWidth='lg'>
                    <Stack
                        direction='row'
                        display='flex'
                        alignItems='center'>
                        <Typography
                            color={theme.palette.getContrastText(theme.palette.common.black)}
                            variant='body2'>
                            {t('footer.copyright', {
                                year    : new Date().getFullYear(),
                                product : t('app.name'),
                            })}
                        </Typography>
                        <Box flexGrow={1} />
                        <IconButton
                            size='small'
                            href='https://github.com/ayltai/brewmymac.sh'
                            target='_blank'>
                            <GitHub sx={{
                                fill : theme.palette.getContrastText(theme.palette.common.black),
                            }} />
                        </IconButton>
                        <IconButton
                            size='small'
                            href='https://linkedin.com/in/ayltai'
                            target='_blank'>
                            <LinkedIn sx={{
                                fill : theme.palette.getContrastText(theme.palette.common.black),
                            }} />
                        </IconButton>
                    </Stack>
                </Container>
            </Box>
        </Stack>
    );
};
