import { defineComponent, ref } from "vue";
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default defineComponent({
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    },
    setup: () => {
        const pokemonArr = ref();
        const pokemon = ref();
        const showPokemon = ref();
        const showAnswer = ref();
        const message = ref();


        const mixPokemonArr = async () => {
            pokemonArr.value = await getPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4);
            pokemon.value = pokemonArr.value[rndInt];
        }

        const checkAnswer = (pokemonId: number) => {
            if (!pokemon.value) return;

            showPokemon.value = true;
            showAnswer.value = true;

            if (pokemonId === pokemon.value.id) {
                message.value = `Correcto, ${pokemon.value.name}`;
            } else {
                message.value = `Oops, era ${pokemon.value.name}`;
            }
            showAnswer.value = true;
        }

        const newGame = () => {
            pokemon.value = null;
            mixPokemonArr();
            showPokemon.value = false;
            showAnswer.value = false;
        }

        mixPokemonArr();

        return {
            pokemonArr,
            pokemon,
            showPokemon,
            showAnswer,
            message,

            mixPokemonArr,
            checkAnswer,
            newGame
        }

    }
})