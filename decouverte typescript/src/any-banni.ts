let grandPas = {
    epee: {
        prenom: 'Andúril'
    }
}

let sam: any = {
    prenom: 'Sam'
}

// grandPas = 1
sam = 1

function displayContent(content: unknown): void {
    if( typeof(content) === 'string') { // type guard
        content.toLowerCase()
    }
}

displayContent('COUCOU')
displayContent(grandPas)