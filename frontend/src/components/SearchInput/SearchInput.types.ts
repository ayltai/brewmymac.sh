export interface SearchInputProps {
    loading?         : boolean,
    hint?            : string,
    onSearch?        : (keyword? : string) => void,
    [ key : string ] : any,
}
