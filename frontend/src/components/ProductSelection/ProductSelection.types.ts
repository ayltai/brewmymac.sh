import type { ButtonGroupProps, } from '@mui/material/ButtonGroup';

export type ProductSelectionProps = Omit<ButtonGroupProps, 'onChange'> & {
    onChange?        : (product : 'packages' | 'tweaks') => void,
    [ key : string ] : any,
};
