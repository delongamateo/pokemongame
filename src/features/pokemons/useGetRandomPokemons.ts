import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate, useLocation } from "react-router";
import { useQuery } from "react-query";
import { PokeAPI } from "pokeapi-types";
import { setPokemonOne, selectPokemonOne } from "./pokemonOneSlice";
import { setPokemonTwo, selectPokemonTwo } from "./pokemonTwoSlice";

const useGetRandomPokemons = () => {
  const [pokemonOneID, setPokemonOneID] = useState<number>(
    Math.floor(Math.random() * 1154)
  );
  const [pokemonTwoID, setPokemonTwoID] = useState<number>(
    Math.floor(Math.random() * 1154)
  );
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (pokemonOneID === pokemonTwoID) {
      setPokemonTwoID((prev) => (prev > 0 ? prev-- : prev++));
    }
  }, [pokemonOneID, pokemonTwoID]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        setEnabled(false);
      },
      enabled: enabled,
      retry: 1,
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
        setEnabled(false);
      },
      enabled: enabled,
      retry: 1,
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

  const pokemonOne = useAppSelector(selectPokemonOne);
  const pokemonTwo = useAppSelector(selectPokemonTwo);

  useEffect(() => {
    console.log(pathname);
    if (pokemonOne && pokemonTwo && enabled === false && pathname === "/") {
      console.log("aa");
      navigate("/game");
    }
  }, [pokemonOne, pokemonTwo, pathname]);

  return setEnabled;
};

export default useGetRandomPokemons;
