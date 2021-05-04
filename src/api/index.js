import { ajax } from 'rxjs/ajax';
import { map, pluck, startWith, tap } from 'rxjs/operators';
import { newFilms, newCharacters } from './data';

const apiURL = `https://swapi.dev/api`;

export const getCharacters = ajax(`${apiURL}/people/`).pipe(
    pluck("response"),  
    pluck("results"),
    startWith([]),
    map(characters => ([ ...characters, ...newCharacters ]
        .map(character => ({ ...character, id: character && character.url ? character.url.replace(/\D/g, '') : "0" }))
        .filter(character => character.name && character.created)
        .filter(({id}) => !["6","7","9"].includes(id))
    )),
    tap(res => console.log(res)),
);

export const getMovies = ajax(`${apiURL}/films/`).pipe(
    pluck("response"),  
    pluck("results"),
    startWith([]),
    map(films => ([ ...films, ...newFilms])),
    tap(res => console.log(res)),
)

export const getShips = ajax(`${apiURL}/starships`).pipe(
    pluck("response"),  
    pluck("results"),
    startWith([]),
    tap(res => console.log(res)),
)