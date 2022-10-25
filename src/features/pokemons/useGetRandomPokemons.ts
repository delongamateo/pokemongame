import { useState, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useQuery } from "react-query";
import { PokeAPI } from "pokeapi-types";
import { setPokemonOne } from "./pokemonOneSlice";
import { setPokemonTwo } from "./pokemonTwoSlice";

const useGetRandomPokemons = () => {
  const [pokemonOneID, setPokemonOneID] = useState<number>(
    Math.floor(Math.random() * 1154)
  );
  const [pokemonTwoID, setPokemonTwoID] = useState<number>(
    Math.floor(Math.random() * 1154)
  );

  useEffect(() => {
    if (pokemonOneID === pokemonTwoID) {
      setPokemonTwoID((prev) => (prev > 0 ? prev-- : prev++));
    }
  }, [pokemonOneID, pokemonTwoID]);

  const dispatch = useAppDispatch();

  const fetchPokemon = async (id: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resp.json();
    return pokemon as PokeAPI.Pokemon;
  };

  const { isError: isPokemonOneError, refetch: refetchPokemonOne } = useQuery(
    "pokemonOne",
    () => fetchPokemon(pokemonOneID),
    {
      onError: () => {
        setPokemonOneID(Math.floor(Math.random() * 1154));
      },
      onSuccess: (data) => {
        dispatch(setPokemonOne(data));
      },
    }
  );

  const { isError: isPokemonTwoError, refetch: refetchPokemonTwo } = useQuery(
    "pokemonTwo",
    () => fetchPokemon(pokemonTwoID),
    {
      onError: () => {
        setPokemonTwoID(Math.floor(Math.random() * 1154));
      },
      onSuccess: (data) => {
        dispatch(setPokemonTwo(data));
      },
    }
  );

  useEffect(() => {
    if (isPokemonOneError) {
      refetchPokemonOne();
    }
    if (isPokemonTwoError) {
      refetchPokemonTwo();
    }
  }, [isPokemonTwoError, isPokemonOneError]);
};

export default useGetRandomPokemons;
