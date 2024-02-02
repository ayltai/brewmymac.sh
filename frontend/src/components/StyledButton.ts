import { Button, styled, } from '@mui/material';

export const StyledButton = styled(Button)(({
    theme,
    variant,
}) => ({
    boxShadow : theme.shadows[0],
    ':hover'  : {
        boxShadow : theme.shadows[variant === 'contained' ? 1 : 0],
    },
}));
