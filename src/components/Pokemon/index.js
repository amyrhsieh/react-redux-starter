import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from 'Redux/pokemon';

export class Pokemon extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPokemon());
  }

  render() {
    return (
      <div>
        <h2>Pokemon</h2>
        <p>A list of Pokemon, sourced from the Redux store.</p>
        <ul>
          {this.props.pokemon.items.map(pokemon =>
            (<li key={pokemon.name}>{pokemon.name}</li>)
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const VisiblePokemon = connect(
  mapStateToProps
)(Pokemon);

export default VisiblePokemon;
