<script src="./PokemonPage.ts"/>
<template>
  <div v-if="!pokemon">Espere por favor ...</div>
  <div v-else>
    <h1>Quien es este Pokemon?</h1>

    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <pokemon-options :pokemons="pokemonArr" @selection-pokemon="checkAnswer($event)" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{  message  }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>
