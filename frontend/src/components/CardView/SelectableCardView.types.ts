import { CardViewProps, } from './CardView.types';

export type SelectableCardViewProps = Omit<CardViewProps, 'onClick'> & {
    selected? : boolean,
    onChange? : (selected : boolean) => void,
};
