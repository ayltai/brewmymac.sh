export interface InstructionProps {
    open?            : boolean,
    spellbookId      : string,
    onClose?         : () => void,
    [ key : string ] : any,
}
