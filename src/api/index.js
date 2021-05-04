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
);

export const getMovies = ajax(`${apiURL}/films/`).pipe(
    pluck("response"),  
    pluck("results"),
    startWith([]),
    map(films => ([ ...films, ...newFilms])),
)

export const getShips = ajax(`${apiURL}/starships`).pipe(
    pluck("response"),  
    pluck("results"),
    startWith([]),
    map(ships => (
        ships.map(ship => ({ ...ship, id: ship && ship.url ? ship.url.replace(/\D/g, '') : "0" }))
        .filter(ship => ship.name && ship.created)
        .filter(({id}) => !["6","7","9"].includes(id))
    )),
)