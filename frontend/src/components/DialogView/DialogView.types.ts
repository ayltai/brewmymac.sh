import type { ReactNode, } from 'react';

export interface DialogViewProps {
    open?            : boolean,
    title?           : string,
    action?          : ReactNode,
    children?        : ReactNode,
    onClose?         : () => void,
    [ key : string ] : any,
}
