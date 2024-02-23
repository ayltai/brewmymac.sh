export type Ingredient = {
    id           : string,
    name         : string,
    description? : string,
    category?    : string,
    imageUrl?    : string,
    infoUrl?     : string,
    author?      : string,
    source       : 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};
