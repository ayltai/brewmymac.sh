import { ReactNode, } from 'react';

import { CardViewProps, } from './CardView.types';

export type SelectableCardViewProps = Omit<CardViewProps, 'children'> & {
    selected? : boolean,
    color?    : 'inherit' | 'primary' | 'secondary',
    children? : ReactNode,
    onChange? : (selected : boolean) => void,
};
