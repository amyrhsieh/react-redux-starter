export const catchEmAll = () => (
  fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET'
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
)
