import readlineSync from 'readline-sync'
import chalk from 'chalk'

//un peu de déco
const or = chalk.yellow('O')
const red = chalk.red('X')

let jeton = red
let choixcol
//les valeurs du tableau
let grille = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

//le trais horizontaux ??? c'est bleu ça?
const ligntrai = () => {
    console.log(chalk.blue('+---'.repeat(7) + '+'))
}
//l'affichage
const affichage = () => {
    console.log('  1   2   3   4   5   6   7')
    ligntrai()
    console.log(
        `| ${grille[0][0]} | ${grille[0][1]} | ${grille[0][2]} | ${grille[0][3]} | ${grille[0][4]} | ${grille[0][5]} | ${grille[0][6]} | F`
    )
    ligntrai()
    console.log(
        `| ${grille[1][0]} | ${grille[1][1]} | ${grille[1][2]} | ${grille[1][3]} | ${grille[1][4]} | ${grille[1][5]} | ${grille[1][6]} | E`
    )
    ligntrai()
    console.log(
        `| ${grille[2][0]} | ${grille[2][1]} | ${grille[2][2]} | ${grille[2][3]} | ${grille[2][4]} | ${grille[2][5]} | ${grille[2][6]} | D`
    )
    ligntrai()
    console.log(
        `| ${grille[3][0]} | ${grille[3][1]} | ${grille[3][2]} | ${grille[3][3]} | ${grille[3][4]} | ${grille[3][5]} | ${grille[3][6]} | C`
    )
    ligntrai()
    console.log(
        `| ${grille[4][0]} | ${grille[4][1]} | ${grille[4][2]} | ${grille[4][3]} | ${grille[4][4]} | ${grille[4][5]} | ${grille[4][6]} | B`
    )
    ligntrai()
    console.log(
        `| ${grille[5][0]} | ${grille[5][1]} | ${grille[5][2]} | ${grille[5][3]} | ${grille[5][4]} | ${grille[5][5]} | ${grille[5][6]} | A`
    )
    ligntrai()
}

//tour de jeu X ou O
let tours = 0

const tour = () => {
    tours += 1
    return tours % 2 === 0 ? (jeton = or) : (jeton = red)
}
//fonction victoire pour sortir du jeu quand gagnant
const victoire = () => {
    console.log('victoire!')
    //break
}

//le choix de la colonne
const jouer = () => {
    let joueur = Number(
        readlineSync.question(
            'dans quelle colonne placez vous votre jeton? (1 à 7) '
        )
    )

    if (isNaN(joueur)) {
        console.log(
            "nous n'avons pas compris votre choix; veuillez entrer un nombre"
        )
        //break
    }

    if (joueur > 7) {
        console.log("il n'y a que 7 colonnes")
        //break
    }

    return (choixcol = joueur - 1)
}

//les jetons sont alignés sur le bas de la grille
const descend = () => {
    for (let i = 5; i >= 0; i -= 1) {
        if (grille[i][choixcol] != ' ') {
        } else {
            grille[i][choixcol] = jeton
            break
        }
    }
}

//vérif victoire horizontale
const verifHoriz = () => {
    for (let y = 0; y <= 5; y += 1) {
        let compteur = 1
        for (let x = 0; x <= 6; x += 1) {
            if (compteur >= 4) {
                victoire()
            } else {
                if (grille[y][x] == ' ' || grille[y][x + 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][x] == grille[y][x + 1]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}

const verifVertic = () => {
    for (let x = 0; x <= 6; x += 1) {
        let compteur = 1
        for (let y = 5; y >= 0; y -= 1) {
            if (compteur < 4) {
                if (grille[y][x] != ' ' && grille[y - 1][x] != ' ') {
                    if (grille[y][x] == grille[y - 1][x]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            } else {
                victoire()
            }
        }
    }
}

////////////////////////////////////////////////// début de en test //////////////////////////////////////////////////////////////////////////////////////

//les diagonales ne fonctionnent pas correctement, j'ai fait trop compliqué

const verifDiag1 = () => {
    for (let x = 1, long = 6; x <= 3; x += 1, long -= 1) {
        let compteur = 1
        for (let xa = x, y = 5; xa < long; xa += 1, y -= 1) {
            if (compteur >= 4) {
                console.log('victoire')
            } else {
                if (grille[y][xa] == ' ' || grille[y - 1][xa + 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][xa] == grille[y - 1][xa + 1]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}

///

const verifDiag2 = () => {
    for (let x = 3, long = 4; x <= 5; x += 1, long += 1) {
        let compteur = 1
        for (let xa = x, y = 0; xa > long; xa -= 1, y += 1) {
            if (compteur >= 4) {
                console.log('victoire')
            } else {
                if (grille[y][xa] == ' ' || grille[y + 1][xa - 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][xa] == grille[y + 1][xa - 1]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}

/*
const verifDiag2 = () => {
    for (let ya = 5, long = 6; ya <= 3; ya -= 1, long -= 1) {
        let compteur = 1
        for (let xa = 0, y = ya; xa < long; xa += 1, y -= 1) {
            if (compteur >= 4) {
                console.log('victoire')
            } else {
                if (grille[y][xa] == ' ' || grille[y - 1][xa + 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][xa] == grille[y - 1][xa + 1]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}
*/
const verifDiag3 = () => {
    for (let x = 1, long = 4; x <= 3; x += 1, long += 1) {
        let compteur = 1
        for (let xa = x, y = 0; xa > long; xa += 1, y += 1) {
            if (compteur >= 4) {
                console.log('victoire')
            } else {
                if (grille[y][xa] == ' ' || grille[y + 1][xa + 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][xa] == grille[y + 1][xa + 1]) {
                        compteur += 1
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}

const verifDiag4 = () => {
    for (let ya = 0, long = 6; ya >= 2; ya += 1, long -= 1) {
        let compteur = 1
        for (let xa = 0, y = ya; xa < long - 1; xa += 1, y += 1) {
            if (compteur >= 4) {
                console.log('victoire')
            } else {
                if (grille[y][xa] == ' ' || grille[y + 1][xa + 1] == ' ') {
                    compteur = 1
                } else {
                    if (grille[y][xa] == grille[y + 1][xa + 1]) {
                        compteur += 1
                        console.log('+1')
                    } else {
                        compteur = 1
                    }
                }
            }
        }
    }
}

////////////////////////////////////////////////// fin de en test //////////////////////////////////////////////////////////////////////////////////////

//fonction principale
export const jeu = () => {
    while (true) {
        affichage()
        verifHoriz()
        verifVertic()
        verifDiag1()
        verifDiag2()
        verifDiag3()
        verifDiag4()
        console.log('tour', tours)
        tour()
        jouer()
        descend()
    }
}
