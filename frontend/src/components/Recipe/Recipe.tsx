import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';
import React, { useEffect, useState, } from 'react';

import { useAddRecipeMutation, } from '../../apis';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Ingredient, } from '../../models';
import { removeIngredient, } from '../../states';
import { handleError, } from '../../utils';
import { DetailsView, } from '../DetailsView';
import { ShoppingCartDetail, } from '../ShoppingCartDetail';
import { RecipeInstruction, } from './Instruction';

/**
 * A recipe contains a list of selected ingredients.
 */
export const Recipe = () => {
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Ingredient | undefined>();
    const [ recipeId,        setRecipeId,        ] = useState<string>();

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const [ addRecipe, { data, error, reset, }, ] = useAddRecipeMutation();

    const dispatch = useAppDispatch();

    const handleSelect = (item : Ingredient) => setSelected(item);

    const handleDelete = (item : Ingredient) => dispatch(removeIngredient(item));

    const handleNext = () => setOpenInstruction(true);

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
        <ShoppingCartDetail
            items={ingredients}
            emptyIcon={
                <RemoveShoppingCart sx={{
                    marginY  : 4,
                    fontSize : 128,
                }} />
            }
            detailsView={
                <DetailsView
                    description={selected?.description}
                    infoUrl={selected?.infoUrl} />
            }
            instruction={
                <RecipeInstruction
                    open={openInstruction}
                    transactionId={recipeId}
                    onClose={handleCloseInstruction} />
            }
            instructionShown={openInstruction}
            onSelect={handleSelect}
            onDelete={handleDelete}
            onNext={handleNext}
            checkout={addRecipe}
            reset={reset} />
    );
};
