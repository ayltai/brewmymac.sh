import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

export const StyledButton = styled(Button)(({
    theme,
    variant,
}) => ({
    boxShadow : theme.shadows[0],
    ':hover'  : {
        boxShadow : theme.shadows[variant === 'contained' ? 1 : 0],
    },
}));
