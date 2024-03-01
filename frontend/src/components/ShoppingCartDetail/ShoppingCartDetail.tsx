import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { SerializedError, } from '@reduxjs/toolkit';
import type { FetchBaseQueryError, } from '@reduxjs/toolkit/query';
import React, { useCallback, useContext, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { FirebaseContext, } from '../../contexts';
import { useAppSelector, } from '../../hooks';
import type { Item, } from '../../models';
import { handleError, logCheckout, logRemoveFromCart, } from '../../utils';
import type { DetailsViewProps, } from '../DetailsView';
import { MaterialButton, } from '../Button';
import { DialogView, } from '../DialogView';
import type { InstructionProps, } from '../Instruction';
import { ListView, } from '../ListView';
import { Loading, } from '../Loading';
import { TruncatedTypography, } from '../TruncatedTypography';
import type { ShoppingCartDetailProps, } from './ShoppingCartDetail.types';

/**
 * A component that displays a list of items in the shopping cart.
 * @param props The component props
 */
export const ShoppingCartDetail = <T extends Item, D extends DetailsViewProps, I extends InstructionProps>({
    items,
    emptyIcon,
    detailsView,
    dialogAction,
    instruction,
    instructionShown,
    onSelect,
    onDelete,
    onNext,
    checkout,
    reset,
    ...rest
} : ShoppingCartDetailProps<T, D, I>) => {
    const [ openDetail,    setOpenDetail,    ] = useState(false);
    const [ selectedItem,  setSelectedItem,  ] = useState<T | undefined>();
    const [ transactionId, setTransactionId, ] = useState<string>();

    const { product, } : { product : 'packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const app = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleClick = useCallback((id : string) => {
        const item = items.find(i => i.id === id);

        if (onSelect) onSelect(item!);
        setSelectedItem(item);

        setOpenDetail(true);
    }, [ onSelect, items, ]);

    const handleDelete = useCallback((id : string) => {
        if (app) logRemoveFromCart(app, {
            itemId : id,
        });

        if (onDelete) onDelete(items.find(item => item.id === id)!);
    }, [ app, onDelete, items, ]);

    const handleNext = useCallback(() => {
        setTransactionId(undefined);
        reset();

        if (app) logCheckout(app, {
            itemIds : items.map(item => item.id),
        });

        if (onNext) onNext();
    }, [ app, items, onNext, reset, ]);

    const handleClose = () => setOpenDetail(false);

    useEffect(() => {
        if (instructionShown && items.length > 0) checkout(items).then(result => {
            if (result.hasOwnProperty('data')) {
                setTransactionId((result as { data : string, }).data);
            } else if (result.hasOwnProperty('error')) {
                handleError((result as { error : FetchBaseQueryError | SerializedError, }).error);
            }
        }).catch(handleError);
    }, [ checkout, items, instructionShown, ]);

    return (
        <Stack
            width={360}
            height='100vh'
            display='flex'
            overflow='hidden'>
            {items.length === 0 && (
                <Stack
                    padding={2}
                    display='flex'
                    flexGrow={1}
                    alignItems='center'
                    textAlign='center'>
                    <Box flexGrow={1} />
                    {emptyIcon}
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
            {items.length > 0 && (
                <Stack
                    display='flex'
                    flexGrow={1}>
                    <ListView
                        sx={{}}
                        onClick={handleClick}
                        onDelete={handleDelete}
                        {...rest}>
                        {items.map(item => (
                            <ListItemText
                                key={item.id}
                                primary={
                                    <Tooltip title={item.name}>
                                        <TruncatedTypography noWrap>
                                            {item.name}
                                        </TruncatedTypography>
                                    </Tooltip>
                                }
                                secondary={item.author} />
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
                            variant='h6'
                            flexGrow={1}>
                            {t('cart.total', {
                                count : items.length,
                            })}
                        </Typography>
                        <MaterialButton
                            disabled={instructionShown}
                            color={product === 'packages' ? 'primary' : 'secondary'}
                            variant='contained'
                            onClick={handleNext}>
                            {t('cart.checkout')}
                        </MaterialButton>
                    </Stack>
                </Stack>
            )}
            {selectedItem && (
                <DialogView
                    open={openDetail}
                    color={product === 'packages' ? 'primary' : 'secondary'}
                    title={selectedItem.name}
                    action={dialogAction}
                    onClose={handleClose}>
                    {detailsView}
                </DialogView>
            )}
            {transactionId && instruction}
            <Loading show={!transactionId && instructionShown}>
                {t('cart.processing')}
            </Loading>
        </Stack>
    );
};
