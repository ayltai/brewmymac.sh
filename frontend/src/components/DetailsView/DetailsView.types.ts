import type { HTMLAttributes, } from 'react';

export type DetailsViewProps = Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> & {
    color?       : 'primary' | 'secondary',
    description? : string,
    infoUrl?     : string,
};
