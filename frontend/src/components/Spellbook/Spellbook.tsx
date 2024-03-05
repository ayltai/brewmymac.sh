import React, { useCallback, useEffect, useState, } from 'react';

import { useAddSpellbookMutation, } from '../../apis';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Tweak, } from '../../models';
import { removeTweak, updateTweak, } from '../../states';
import { handleError, } from '../../utils';
import { TweakDetailsView, } from '../DetailsView';
import { ShoppingCartDetail, } from '../ShoppingCartDetail';
import { SpellbookInstruction, } from './Instruction';

/**
 * A spellbook contains a list of selected tweaks.
 */
export const Spellbook = () => {
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Tweak | undefined>();
    const [ spellbookId,     setSpellbookId,     ] = useState<string>();

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spellbook);

    const [ addSpellbook, { data, error, reset, }, ] = useAddSpellbookMutation();

    const dispatch = useAppDispatch();

    const handleSelect = (item : Tweak) => setSelected(item);

    const handleDelete = (item : Tweak) => dispatch(removeTweak(item));

    const handleNext = () => setOpenInstruction(true);

    const handleChange = useCallback((parameter : string, value? : boolean | number | string) => {
        if (selected && value) {
            const tweak = {
                ...selected,
            };

            tweak.values[selected.parameters.indexOf(parameter)] = value;

            dispatch(updateTweak(tweak));
        }
    }, [ dispatch, selected, ]);

    const handleCloseInstruction = () => setOpenInstruction(false);

    useEffect(() => {
        if (openInstruction && tweaks.length > 0) addSpellbook(tweaks).catch(handleError);
    }, [ addSpellbook, tweaks, openInstruction, ]);

    useEffect(() => {
        if (data) setSpellbookId(data);
    }, [ data, ]);

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <ShoppingCartDetail
            items={tweaks}
            detailsView={
                <TweakDetailsView
                    description={selected?.description}
                    infoUrl={selected?.infoUrl}
                    parameters={selected?.parameters ?? []}
                    types={selected?.types ?? []}
                    values={selected?.values ?? []}
                    onChange={handleChange} />
            }
            instruction={
                <SpellbookInstruction
                    open={openInstruction}
                    transactionId={spellbookId}
                    onClose={handleCloseInstruction} />
            }
            instructionShown={openInstruction}
            onSelect={handleSelect}
            onDelete={handleDelete}
            onNext={handleNext}
            checkout={addSpellbook}
            reset={reset} />
    );
};
