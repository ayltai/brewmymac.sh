import { ButtonProps, } from '@mui/material';

import type { ReactElement, } from 'react';

export interface CardViewProps {
    title?           : string,
    subtitle?        : string,
    description?     : string,
    onClick?         : () => void,
    children?        : ReactElement<ButtonProps> | ReactElement<ButtonProps>[],
    [ key : string ] : any,
}
