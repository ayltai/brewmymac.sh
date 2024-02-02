import type { ReactNode, } from 'react';

export interface DetailsViewProps {
    description?     : string,
    infoUrl?         : string,
    children?        : ReactNode,
    [ key : string ] : any,
}
