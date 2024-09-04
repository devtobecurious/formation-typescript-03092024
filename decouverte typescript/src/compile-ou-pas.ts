type CanneType = {
    canne: string
}

interface WithCanne {
    canne: string
}

class Wizard implements WithCanne {
    //canne: string = 'v1'
    canne = 'v1'
}

// const gandalf: Wizard = new Wizard()
// gandalf.canne = 'v2'

function afficherVersionCanne(withCanne: Wizard): void {
    console.info(withCanne.canne)
}

//afficherVersionCanne(gandalf)

const gandalf2: WithCanne = {
    canne: 'v3'
}
afficherVersionCanne(gandalf2)

const gandalf3 = {
    canne: 'v2'
}
afficherVersionCanne(gandalf3)


const gandalf4 = {
    canne: 'v2',
    papillon: true
}
afficherVersionCanne(gandalf4)


