import type { ReactNode, } from 'react';

export interface CheckButtonProps {
    checked?         : boolean,
    color?           : 'inherit' | 'primary' | 'secondary',
    checkedText?     : ReactNode,
    checkedIcon?     : ReactNode,
    uncheckText?     : ReactNode,
    uncheckedText?   : ReactNode,
    uncheckedIcon?   : ReactNode,
    onChange?        : (checked : boolean) => void,
    [ key : string ] : any,
}
