import {Grille} from "../src/Grille";

test("Doit avoir une grille initialisée", () => {
    expect(Grille.getLongueur()).toEqual(3);
    expect(Grille.getLargeur()).toEqual(3);
})

test("Doit avoir une ligne de cellule morte, une vivante et encore une morte", () => {

    expect(Grille.getCellule(0, 0)).toBe(false);
    expect(Grille.getCellule(0, 1)).toBe(false);
    expect(Grille.getCellule(0, 2)).toBe(false);
    expect(Grille.getCellule(1, 0)).toBe(true);
    expect(Grille.getCellule(1, 1)).toBe(true);
    expect(Grille.getCellule(1, 2)).toBe(true);
    expect(Grille.getCellule(2, 0)).toBe(false);
    expect(Grille.getCellule(2, 1)).toBe(false);
    expect(Grille.getCellule(2, 2)).toBe(false);

    /**
     *    * * *
     *    - - -
     *    * * *
     * 
     */
})

test("Si la cellule est vivante et a moins de deux voisins vivants?, elle meure", () => {
    Grille.lancerUnTour()
    expect(Grille.getCellule(1, 0)).toBe(false);
})