import { AutoFixHigh, AutoFixOff, } from '@mui/icons-material';
import { Box, Divider, ListItemText, Stack, Tooltip, Typography, } from '@mui/material';
import React, { FC, useContext, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAddSpellbookMutation, } from '../../apis';
import { FirebaseContext, } from '../../contexts';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Tweak, } from '../../models';
import { removeTweak, updateTweak, } from '../../states';
import { handleError, logCheckout, logRemoveFromCart, } from '../../utils';
import { TweakDetailsView, } from '../DetailsView';
import { DialogView, } from '../DialogView';
import { ListView, } from '../ListView';
import { Loading, } from '../Loading';
import { StyledButton, } from '../StyledButton';
import { TruncatedTypography, } from '../TruncatedTypography';
import { Instruction, } from './Instruction';
import type { SpellbookProps, } from './Spellbook.types';

/**
 * A spellbook contains a list of selected tweaks.
 * @param rest Other props
 */
export const Spellbook : FC<SpellbookProps> = ({
    ...rest
}) => {
    const [ openDetail,      setOpenDetail,      ] = useState(false);
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Tweak | undefined>();
    const [ spellbookId,     setSpellbookId,     ] = useState<string>();

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spellbook);

    const [ addSpellbook, { data, error, reset, }, ] = useAddSpellbookMutation();

    const dispatch = useAppDispatch();

    const app = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleClick = (id : string) => {
        setSelected(tweaks.find(tweak => tweak.id === id));
        setOpenDetail(true);
    };

    const handleDelete = (id : string) => {
        if (app) {
            logRemoveFromCart(app, {
                itemId : id,
            });
        }

        dispatch(removeTweak((tweaks ?? []).find(tweak => tweak.id === id)!));
    };

    const handleChange = (parameter : string, value? : boolean | number | string) => {
        if (selected && value) {
            const tweak = {
                ...selected,
            };

            tweak.values[selected.parameters.indexOf(parameter)] = value;

            dispatch(updateTweak(tweak));
        }
    };

    const handleNext = () => {
        setSpellbookId(undefined);
        reset();
        setOpenInstruction(true);

        if (app) logCheckout(app, {
            itemIds : tweaks.map(tweak => tweak.id),
        });
    };

    const handleCloseDetail = () => setOpenDetail(false);

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
        <Stack
            width={360}
            height='100vh'
            display='flex'
            overflow='hidden'>
            {tweaks.length === 0 && (
                <Stack
                    padding={2}
                    display='flex'
                    flexGrow={1}
                    alignItems='center'
                    textAlign='center'>
                    <Box flexGrow={1} />
                    <AutoFixOff sx={{
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
            {tweaks.length > 0 && (
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
                        {tweaks.map(tweak => (
                            <ListItemText
                                key={tweak.id}
                                primary={
                                    <Tooltip title={tweak.name}>
                                        <TruncatedTypography noWrap>
                                            {tweak.name}
                                        </TruncatedTypography>
                                    </Tooltip>
                                }
                                secondary={tweak.author} />
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
                            {t('tweaks.checkout.total', {
                                count : tweaks.length,
                            })}
                        </Typography>
                        <StyledButton
                            disabled={openInstruction}
                            variant='contained'
                            startIcon={<AutoFixHigh />}
                            onClick={handleNext}>
                            {t('tweaks.checkout.apply')}
                        </StyledButton>
                    </Stack>
                </Stack>
            )}
            {selected && (
                <DialogView
                    open={openDetail}
                    title={selected.name}
                    onClose={handleCloseDetail}>
                    <TweakDetailsView
                        description={selected.description}
                        infoUrl={selected.infoUrl}
                        parameters={selected.parameters}
                        types={selected.types}
                        values={selected.values}
                        onChange={handleChange} />
                </DialogView>
            )}
            {spellbookId && (
                <Instruction
                    open={openInstruction}
                    spellbookId={spellbookId}
                    onClose={handleCloseInstruction} />
            )}
            <Loading show={!spellbookId && openInstruction}>
                {t('tweaks.checkout.processing')}
            </Loading>
        </Stack>
    );
};
