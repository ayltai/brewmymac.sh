export interface InstructionProps {
    open?            : boolean,
    recipeId         : string,
    onClose?         : () => void,
    [ key : string ] : any,
}
