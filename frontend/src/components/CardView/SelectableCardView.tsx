import { useTheme, } from '@mui/material';
import React, { ComponentType, } from 'react';

import { CardView, } from './CardView';
import type { SelectableCardViewProps, } from './SelectableCardView.types';

const withSelectable = (Component : ComponentType<SelectableCardViewProps>) => {
    const ComponentWithSelectable : (props : SelectableCardViewProps) => React.JSX.Element = (props : SelectableCardViewProps) => {
        const { sx, selected = false, onChange, ...rest } = props;

        const theme = useTheme();

        const handleClick = () => {
            if (onChange) onChange(!selected);
        };

        return (
            <Component
                sx={{
                    ...sx,
                    border          : `1px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
                    backgroundColor : selected ? theme.palette.action.selected : theme.palette.background.paper,
                }}
                {...rest}
                onClick={handleClick} />
        );
    };

    return ComponentWithSelectable;
};

export const SelectableCardView = withSelectable(CardView);
