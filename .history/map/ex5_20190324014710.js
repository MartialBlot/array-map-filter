/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

function multiplyOddIndices(numbers) {
  //return numbers.map(numbers, a => (a%2===0) ? numbers : mumbers*a)
  for (let i = 0; i < numbers.length; i++) {
  return numbers.map(numbers => (numbers%2===0) ? numbers : numbers*i)
}

module.exports = multiplyOddIndices;