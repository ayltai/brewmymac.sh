import { DeleteForever, } from '@mui/icons-material';
import { Divider, IconButton, List, ListItem, ListItemButton, } from '@mui/material';
import React, { Children, FC, } from 'react';

import type { ListViewProps, } from './ListView.types';

/**
 *
 * @param children The content of the component
 * @param onClick Function to call when the list item is clicked
 * @param onDelete Function to call when the delete button is clicked
 * @param rest Other props
 */
export const ListView : FC<ListViewProps> = ({
    children,
    onClick,
    onDelete,
    ...rest
}) => (
    <List {...rest}>
        {Children.toArray(children).map((child, index) => {
            const key = (child as any).key.substring(2);

            const handleClick = () => {
                if (onClick) onClick(key);
            };

            const handleDelete = () => {
                if (onDelete) onDelete(key);
            };

            return (
                <>
                    {index !== 0 && <Divider />}
                    <ListItem
                        key={key}
                        disablePadding
                        secondaryAction={
                            <IconButton
                                data-testid='delete-button'
                                edge='end'
                                onClick={handleDelete}>
                                <DeleteForever />
                            </IconButton>
                        }>
                        <ListItemButton onClick={handleClick}>
                            {child}
                        </ListItemButton>
                    </ListItem>
                </>
            );
        })}
    </List>
);
