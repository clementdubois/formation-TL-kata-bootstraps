export const Grille = {
    cellules: [
        [false, false, false],
        [true, true, true], 
        [false, false, false]
    ],

    getLongueur() {
        return this.getLigne(0).length;
    },

    getLargeur() {
        return this.cellules.length;
    },

    getLigne(ligne) {
        return this.cellules[ligne]
    },

    getCellule(ligne, colonne) {
        return this.getLigne(ligne)[colonne]
    },
    

}