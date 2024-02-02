import type { ReactNode, } from 'react';

export interface SectionProps {
    title?           : string,
    color?           : 'primary' | 'secondary',
    children?        : ReactNode,
    [ key : string ] : any,
}
