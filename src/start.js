import readLineSync from 'readline-sync'
import chalk from 'chalk'
import rules from './rules.js'
import help from './help.js'
import { jeu } from './grille.js'

let o = chalk.red('x')
let x = chalk.yellow('o')

let name = readLineSync.question('Name: ')
let name1 = readLineSync.question('Name: ')

const joueur = () => {
    console.log(`${name} you play whith the ${o} `)
    console.log(`${name1} you play whith the ${x} `)
}

let choix = ['Put', 'Rules', 'Help', 'Whoami', 'Dropped']
let msg = readLineSync.keyInSelect(choix, 'What do you do')
switch (msg) {
    case 0:
        jeu()
        break
    case 1:
        rules()
        break
    case 2:
        help()
        break
    case 3:
        joueur()
        break
    case 3:
        console.log('exit the game')
        break
    default:
        console.log('bad choice')
}
