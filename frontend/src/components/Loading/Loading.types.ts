import type { ReactNode, } from 'react';

export interface LoadingProps {
    show?            : boolean,
    children?        : ReactNode,
    [ key : string ] : any,
}
