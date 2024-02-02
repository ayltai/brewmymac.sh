import React, { ComponentType, JSX, } from 'react';

import { Section, } from '../Section';
import { GridView, } from './GridView';
import { GridViewProps, } from './GridView.types';
import type { SectionedGridViewProps, } from './SectionedGridView.types';

const withSection = (Component : ComponentType<GridViewProps>) => {
    const ComponentWithSection : (props : SectionedGridViewProps) => JSX.Element = (props : SectionedGridViewProps) => {
        const { title, children, ...rest } = props;

        return (
            <Section
                title={title}
                {...rest}>
                <Component>
                    {children}
                </Component>
            </Section>
        );
    };

    return ComponentWithSection;
};

export const SectionedGridView = withSection(GridView);
