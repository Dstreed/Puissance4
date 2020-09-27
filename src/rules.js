import readLineSync from 'readline-sync'
import chalk from 'chalk'

const rules = () => {
    console.log(`Une grille de jeu avec deux réceptacles et 42 emplacements
        21 pions jaunes
        21 pions rouges
        2 joueurs

        DEROULEMENT DE LA PARTIE
        Les joueurs choisissent chacun une couleur de pion. 
        Le joueur qui commence met un premier pion dans l’une des couleurs de son choix. 
        Le jeton tombe au bas de la colonne. Son adversaire insère à son tour un jeton, le but étant de contrer l’autre au fur et à mesure du jeu pour qu’il n’arrive pas à former une rangée de 4 jetons de sa couleur, dans un sens, comme dans l’autre et en diagonale.
        
        LE GAGNANT EST :
        Le joueur qui arrive à aligner 4 pions est le gagnant. 
        La partie est nulle et recommencée si aucun des deux n’y est arrivé et que la grille est remplie.`)
}

export default rules
