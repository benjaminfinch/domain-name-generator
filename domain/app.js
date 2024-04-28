let pronoun = ['our', 'their', 'the'];
let adj = ['amazing', 'great', 'little'];
let noun = ['player', 'brother', 'gamer'];
let extensions = ['com', 'me', 'dev', 'org'];

for (pronombre in pronoun) {
    for (adjetivo in adj) {
        for (sustantivo in noun) {
            for (extension in extensions) {
                let extensionLength = extensions[extension].length;
                let nounTwo = noun[sustantivo];
                if (noun[sustantivo].slice(extensionLength * -1) === extensions[extension]) {
                    let nounThree = nounTwo.slice(0, nounTwo.length - extensionLength);
                    console.log(`${pronoun[pronombre]}${adj[adjetivo]}${nounThree}.${extensions[extension]}`);
                } else {
                    console.log(`${pronoun[pronombre]}${adj[adjetivo]}${noun[sustantivo]}.${extensions[extension]}`);
                }
            }
        }
    }
}