import { Check, DeleteForever, } from '@mui/icons-material';
import { useTheme, } from '@mui/material';
import React, { ComponentType, JSX, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { CheckButton, } from '../CheckButton';
import { DialogView, } from '../DialogView';
import { StyledButton, } from '../StyledButton';
import { CardView, } from './CardView';
import { CardViewProps, } from './CardView.types';
import type { SelectableCardViewProps, } from './SelectableCardView.types';

const withSelectable = (Component : ComponentType<CardViewProps>) => {
    const ComponentWithSelectable : (props : SelectableCardViewProps) => JSX.Element = (props : SelectableCardViewProps) => {
        const { sx, selected = false, color, action, actionIcon, actionText, children, onChange, ...rest } = props;

        const [ open, setOpen, ] = useState(false);

        const theme = useTheme();

        const { t, } = useTranslation();

        const borderColor = color === 'primary' ? theme.palette.primary.main : color === 'secondary' ? theme.palette.secondary.main : theme.palette.divider;

        const handleClick = () => setOpen(true);

        const handleChange = (checked : boolean) => {
            if (onChange) onChange(checked);
        };

        const handleClose = () => setOpen(false);

        return (
            <>
                <Component
                    sx={{
                        ...sx,
                        border          : `1px solid ${selected ? borderColor : theme.palette.divider}`,
                        backgroundColor : selected ? theme.palette.action.selected : theme.palette.background.paper,
                    }}
                    {...rest}
                    onClick={handleClick}>
                    {(actionIcon || actionText) && (
                        <StyledButton
                            color={color}
                            startIcon={actionIcon}
                            onClick={handleClick}>
                            {actionText}
                        </StyledButton>
                    )}
                    <CheckButton
                        checked={selected}
                        color={color}
                        checkedText={t('action.deselect')}
                        checkedIcon={<Check />}
                        uncheckText={t('action.remove')}
                        uncheckedText={t('action.select')}
                        uncheckedIcon={<DeleteForever />}
                        onChange={handleChange} />
                </Component>
                {children && (
                    <DialogView
                        open={open}
                        title={props.title}
                        action={action}
                        onClose={handleClose}>
                        {children}
                    </DialogView>
                )}
            </>
        );
    };

    return ComponentWithSelectable;
};

export const SelectableCardView = withSelectable(CardView);
