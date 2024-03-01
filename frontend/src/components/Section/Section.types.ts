import type { HTMLAttributes, ReactNode, } from 'react';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
    title?    : string,
    color?    : 'primary' | 'secondary',
    children? : ReactNode,
};
