import type { ReactNode, } from 'react';

import { GridViewProps, } from './GridView.types';

export type SectionedGridViewProps = GridViewProps & {
    children?        : ReactNode,
    [ key : string ] : any,
};
