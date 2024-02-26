import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import React, { FC, useState, } from 'react';

import type { CheckButtonProps, } from './CheckButton.types';

/**
 * A button that can be used to turn an option on or off.
 * @param checked The checked state of the button
 * @param color The color of the text and icon when the button is in the checked state
 * @param checkedText The text to show when the button is in the checked state
 * @param checkedIcon The icon to show when the button is in the checked state
 * @param uncheckText The text to show when the button is in checked state and is hovered
 * @param uncheckedText The text to show when the button is in the unchecked state
 * @param uncheckedIcon The icon to show when the button is in the unchecked state
 * @param onChange Function to call when the checked state is changed
 * @param rest Other props
 */
export const CheckButton : FC<CheckButtonProps> = ({
    checked = false,
    color,
    checkedText,
    checkedIcon,
    uncheckText,
    uncheckedText,
    uncheckedIcon,
    onChange,
    ...rest
}) => {
    const [ hover, setHover, ] = useState(false);

    const theme = useTheme();

    const handleClick = () => {
        if (onChange) onChange(!checked);
    };

    const handleMouseOver = () => setHover(true);

    const handleMouseOut = () => setHover(false);

    return (
        <Button
            {...rest}
            aria-selected={checked}
            sx={{
                boxShadow : theme.shadows[0],
                ':hover'  : {
                    boxShowdow : theme.shadows[checked ? 1 : 0],
                },
            }}
            role='checkbox'
            color={color}
            variant={checked ? 'contained' : 'text'}
            startIcon={checked ? hover ? uncheckedIcon : checkedIcon : checkedIcon}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {checked ? hover ? uncheckText : checkedText : uncheckedText}
        </Button>
    );
};
