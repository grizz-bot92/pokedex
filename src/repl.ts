
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

export function startREPL(){
    const {readline} = require('readline');

    let rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout,
        prompt: ' >',
    });

    rl.prompt();

    rl.on("line", (input: string) => { 
        const firstWord = cleanInput(input);  
        if (!input){
        rl.prompt();
        }
        console.log(`Your command was: ${firstWord}`);
        rl.prompt();
    });

}
cleanInput("Hello, World");