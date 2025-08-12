import { stringify } from "querystring"

export function cleanInput(input: string): string[] {
    const actual: string[] = [];
    const splitWord = input.split(" ");
    for(const word of splitWord){
        const trimmed = word.trim().toLowerCase();
        if(trimmed.length > 0){
            actual.push(trimmed);
        }        
    }
    return actual
}

cleanInput("Hello, World");