import { Box, Divider, ListItemText, Stack, Typography, } from '@mui/material';
import React, { FC, } from 'react';
import { useTranslation, } from 'react-i18next';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import { Ingredient, } from '../../models';
import { removeIngredient, } from '../../states';
import { ListView, } from '../ListView';
import { TruncatedTypography, } from '../TruncatedTypography';
import type { RecipeProps, } from './Recipe.types';

/**
 * A recipe contains a list of selected ingredients.
 * @param rest Other props
 */
export const Recipe : FC<RecipeProps> = ({
    ...rest
}) => {
    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.cookbook);

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const handleClick = (id : string) => {
        console.log(`Clicked ${id}`);
    };

    const handleDelete = (id : string) => dispatch(removeIngredient((ingredients ?? []).find(ingredient => ingredient.id === id)!));

    return (
        <Stack
            width={320}
            height='100vh'
            display='flex'>
            <ListView
                sx={{
                    maxHeight : 'calc(100vh - 2rem)',
                    overflowY : 'auto',
                }}
                onClick={handleClick}
                onDelete={handleDelete}
                {...rest}>
                {ingredients.map(ingredient => (
                    <ListItemText
                        key={ingredient.id}
                        primary={
                            <TruncatedTypography noWrap>
                                {ingredient.name}
                            </TruncatedTypography>
                        }
                        secondary={
                            <TruncatedTypography
                                noWrap
                                variant='body2'
                                color='text.secondary'>
                                {ingredient.author}
                            </TruncatedTypography>
                        } />
                ))}
            </ListView>
            <Divider />
            <Box padding={2}>
                <Typography fontWeight='bold'>
                    {t('packages.checkout.total', {
                        count : ingredients.length,
                    })}
                </Typography>
            </Box>
        </Stack>
    );
};
