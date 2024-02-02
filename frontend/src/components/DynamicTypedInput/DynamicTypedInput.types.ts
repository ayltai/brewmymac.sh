export interface DynamicTypedInputProps {
    title            : string,
    type             : 'boolean' | 'number' | 'string',
    value            : boolean | number | string,
    onChange?        : (value? : boolean | number | string) => void,
    [ key : string ] : any,
}
