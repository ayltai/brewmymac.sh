import type { ReactNode, } from 'react';

export interface ListViewProps {
    children?        : ReactNode,
    onClick?         : (key : string) => void,
    onDelete?        : (key : string) => void,
    [ key : string ] : any,
}
