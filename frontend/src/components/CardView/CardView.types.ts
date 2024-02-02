import type { ReactNode, } from 'react';

export interface CardViewProps {
    title?           : string,
    subtitle?        : string,
    description?     : string,
    onClick?         : () => void,
    children?        : ReactNode,
    [ key : string ] : any,
}
