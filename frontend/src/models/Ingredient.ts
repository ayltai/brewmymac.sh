import type { Item, } from './Item';

export type Ingredient = Item & {
    source : 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};
