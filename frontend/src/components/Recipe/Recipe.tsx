import { InstallDesktop, RemoveShoppingCart, } from '@mui/icons-material';
import { Box, Divider, ListItemText, Stack, Typography, } from '@mui/material';
import React, { FC, useContext, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAddRecipeMutation, } from '../../apis';
import { FirebaseContext, } from '../../contexts';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Ingredient, } from '../../models';
import { removeIngredient, } from '../../states';
import { handleError, logCheckout, logRemoveFromCart, } from '../../utils';
import { DetailsView, } from '../DetailsView';
import { DialogView, } from '../DialogView';
import { ListView, } from '../ListView';
import { Loading, } from '../Loading';
import { StyledButton, } from '../StyledButton';
import { TruncatedTypography, } from '../TruncatedTypography';
import { Instruction, } from './Instruction';
import type { RecipeProps, } from './Recipe.types';

/**
 * A recipe contains a list of selected ingredients.
 * @param rest Other props
 */
export const Recipe : FC<RecipeProps> = ({
    ...rest
}) => {
    const [ openDetail,      setOpenDetail,      ] = useState(false);
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Ingredient | undefined>();
    const [ recipeId,        setRecipeId,        ] = useState<string>();

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const [ addRecipe, { data, error, reset, }, ] = useAddRecipeMutation();

    const dispatch = useAppDispatch();

    const app = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleClick = (id : string) => {
        setSelected(ingredients.find(ingredient => ingredient.id === id));
        setOpenDetail(true);
    };

    const handleDelete = (id : string) => {
        if (app) {
            logRemoveFromCart(app, {
                itemId : id,
            });
        }

        dispatch(removeIngredient((ingredients ?? []).find(ingredient => ingredient.id === id)!));
    };

    const handleNext = () => {
        setRecipeId(undefined);
        reset();
        setOpenInstruction(true);

        if (app) logCheckout(app, {
            itemIds : ingredients.map(ingredient => ingredient.id),
        });
    };

    const handleCloseDetail = () => setOpenDetail(false);

    const handleCloseInstruction = () => setOpenInstruction(false);

    useEffect(() => {
        if (openInstruction && ingredients.length > 0) addRecipe(ingredients).catch(handleError);
    }, [ addRecipe, ingredients, openInstruction, ]);

    useEffect(() => {
        if (data) setRecipeId(data);
    }, [ data, ]);

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <Stack
            width={360}
            height='100vh'
            display='flex'
            overflow='hidden'>
            {ingredients.length === 0 && (
                <Stack
                    padding={2}
                    display='flex'
                    flexGrow={1}
                    alignItems='center'
                    textAlign='center'>
                    <Box flexGrow={1} />
                    <RemoveShoppingCart sx={{
                        marginY  : 4,
                        fontSize : 128,
                    }} />
                    <Typography
                        gutterBottom
                        variant='h5'>
                        {t('cart.empty')}
                    </Typography>
                    <Typography>
                        {t('cart.hint')}
                    </Typography>
                    <Box flexGrow={1} />
                </Stack>
            )}
            {ingredients.length > 0 && (
                <Stack
                    display='flex'
                    flexGrow={1}>
                    <ListView
                        sx={{
                            maxHeight : 'calc(100vh - 4rem)',
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
                                secondary={ingredient.author} />
                        ))}
                    </ListView>
                    <Box flexGrow={1} />
                    <Divider />
                    <Stack
                        padding={2}
                        direction='row'
                        display='flex'
                        alignItems='center'>
                        <Typography
                            flexGrow={1}
                            fontWeight='bold'>
                            {t('packages.checkout.total', {
                                count : ingredients.length,
                            })}
                        </Typography>
                        <StyledButton
                            disabled={openInstruction}
                            variant='contained'
                            startIcon={<InstallDesktop />}
                            onClick={handleNext}>
                            {t('packages.checkout.install')}
                        </StyledButton>
                    </Stack>
                </Stack>
            )}
            <DialogView
                open={openDetail}
                title={selected?.name}
                onClose={handleCloseDetail}>
                <DetailsView
                    description={selected?.description}
                    infoUrl={selected?.infoUrl} />
            </DialogView>
            {recipeId && (
                <Instruction
                    open={openInstruction}
                    recipeId={recipeId}
                    onClose={handleCloseInstruction} />
            )}
            <Loading show={!recipeId && openInstruction}>
                {t('packages.checkout.processing')}
            </Loading>
        </Stack>
    );
};
