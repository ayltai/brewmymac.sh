import type { SerializedError, } from '@reduxjs/toolkit';
import type { FetchBaseQueryError, } from '@reduxjs/toolkit/query';
import type { ReactElement, ReactNode, } from 'react';

import type { Item, } from '../../models';
import type { DetailsViewProps, } from '../DetailsView';
import type { InstructionProps, } from '../Instruction';
import type { ListViewProps, } from '../ListView';

export type ShoppingCartDetailProps<T extends Item, D extends DetailsViewProps, I extends InstructionProps> = Omit<ListViewProps, 'onSelect' | 'onDelete'> & {
    items             : T[],
    emptyIcon?        : ReactNode,
    detailsView?      : ReactElement<D>,
    dialogAction?     : ReactNode,
    instruction?      : ReactElement<I>,
    instructionShown? : boolean,
    onSelect?         : (item : T) => void,
    onDelete?         : (item : T) => void,
    onNext?           : () => void,
    checkout          : (items : T[]) => Promise<{ data : string, } | { error : FetchBaseQueryError | SerializedError, }>,
    reset             : () => void,
};
