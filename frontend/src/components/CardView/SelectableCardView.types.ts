import { ReactNode, } from 'react';

import { CardViewProps, } from './CardView.types';

export type SelectableCardViewProps = Omit<CardViewProps, 'children'> & {
    selected?   : boolean,
    color?      : 'inherit' | 'primary' | 'secondary',
    actionText? : string,
    actionIcon? : ReactNode,
    children?   : ReactNode,
    onChange?   : (selected : boolean) => void,
};
