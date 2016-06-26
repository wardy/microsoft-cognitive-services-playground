import gameOfThrones from '../face-lists/game-of-thrones';
import detectFromURL from './detect-from-url'

export default function getCharactersFaces () {
  return Promise.all(gameOfThrones.seasonOne.female.map((currentCharacter) => {
    console.log(currentCharacter);
    return detectFromURL(currentCharacter.imageURL);
  })).then((characters) => {
    return Promise.resolve(characters.map((char, idx) => {
      return Object.assign(char[0], gameOfThrones.seasonOne.female[idx]);
    }));
  });
}