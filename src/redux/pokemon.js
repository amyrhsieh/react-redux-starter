
export const catchEmAll = () => (
  fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
)

export const FETCH_POKEMON_BEGIN   = 'FETCH_POKEMON_BEGIN';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export default function pokemonReducer(state = [], action) {
  switch(action.type) {
    case FETCH_POKEMON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.pokemon
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}

export function fetchPokemon() {
  return function(dispatch) {
    dispatch(fetchPokemonBegin());
    return fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(fetchPokemonSuccess(json.results))
      )
  }
}

export const fetchPokemonBegin = () => ({
  type: FETCH_POKEMON_BEGIN
});

export const fetchPokemonSuccess = pokemon => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: { pokemon }
});

export const fetchPokemonFailure = error => ({
  type: FETCH_POKEMON_FAILURE,
  payload: { error }
});
