const Discord = require('discord.js')
const Erotron = new Discord.Client()
const commandPrefix = '>'

Erotron.login('')

const name = [
    "christelle", "joséphine", "stéphanie", 
    "fabienne", "carole", "blanche", "virginie", 
    "armande", "denise", "cécile", "florence", 
    "anne", "jeanne", "aurore", "madeleine", "camille", 
    "caroline", "claire", "clémence", "Eva" , "Olympe"
]

const passion_h = [
    "caprices", "besoins", "bouillonnements", "objectifs",
    "penchants", "attraits", "goûts", "souhaits", "élans",
    "enthousiasmes", "sentiments", "violences", "délires",
    "intérêts", "péchés mignons", "péchés", "dispositions",
    "vices", "béguins", "entichements", "éréthismes",
    "engouements", "emballements", "troubles"
]
const passion_f = [
    "passions", "émotions", "tentations", "attentes", "ardeurs",
    "exaltations", "chaleurs", "frénésies", "flammes", "fièvres",
    "curiosités", "joies", "jouissances", "appétences", "convoitises",
    "avidités", "concupiscences", "aspirations", "exigences",
    "adorations", "liaisons", "fureur", "rages", "manies"
]

const adj_h = [
    "énigmatiques", "cachés", "indiscernables", "invisibles", "secrèts",
    "voilés", "anonymes", "fascinants", "inconnaissables", "inexplicables",
    "magiques", "problématiques", "équivoques", "glissants", "inconnus",
    "inexpliques", "nébuleux", "profonds", "sourds", "ésotériques", "cachottiers",
    "hermétiques", "obscurs", "renfermés", "subtils", "étranges", "différents", 
    "impénétrables", "indéfinissables", "occultes", "ténébreux"
]

const adj_f = [
    "énigmatiques", "cachées", "indiscernables", "invisibles",
    "opaques", "secrètes", "voilées", "anonymes", "fascinantes",
    "inconnaissables", "inexplicables", "magiques", "problématiques",
    "équivoques", "glissantes", "inconnues", "inexpliquées", "nébuleuses",
    "profondes", "sourdes", "ésotériques", "cachottières", "hermétiques",
    "obscures", "renfermées", "subtiles", "étranges", "différentes",
    "impénétrables", "indéfinissables", "occultes", "ténébreuses"
]


const UCFirstChar = (string) => { 
    return (string + '').charAt(0).toUpperCase() + string.substr(1)
}

const randomly = (array) => {
    return Math.floor(Math.random() * Math.floor(array.length))
}

Erotron.on('message',  message => {
    if (message.content.startsWith(commandPrefix + 'erotron')) {
        const draw = Math.floor(Math.random() * 2 + 1)

        let buildPassion
        let buildAdj

        switch (draw) {
            case 1:
                buildPassion = passion_f[randomly(passion_f)]
                buildAdj = adj_f[randomly(adj_f)]
                break;
        
            case 2:
                buildPassion = passion_h[randomly(passion_h)]
                buildAdj = adj_h[randomly(adj_h)]
                break;
        }

        const buildName = UCFirstChar(name[randomly(name)])
        const build = `${buildName} et les ${buildPassion} ${buildAdj}`

        message.channel.send(build)
    }
})



// if (draw == 1) {
//     buildPassion = passion_f[randomly(passion_f)]            
//     buildAdj = adj_f[randomly(adj_f)]
// }
// else if (draw == 2) {
//     buildPassion = passion_h[randomly(passion_h)]
//     buildAdj = adj_h[randomly(adj_h)]
// } 
