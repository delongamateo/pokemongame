import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate, useLocation } from "react-router";
import { useQuery } from "react-query";
import { PokeAPI } from "pokeapi-types";
import {
  setPokemonOne,
  selectPokemonOne,
  setPokemonOneHealth,
  selectPokemonOneHealth,
} from "./pokemonOneSlice";
import {
  setPokemonTwo,
  selectPokemonTwo,
  setPokemonTwoHealth,
} from "./pokemonTwoSlice";
import { clearLogs } from "../logs/logsSlice";

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const fetchPokemon = async (id: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resp.json();
    return pokemon as PokeAPI.Pokemon;
  };

  const {
    isError: isPokemonOneError,
    refetch: refetchPokemonOne,
    isLoading: isPokemonOneLoading,
  } = useQuery("pokemonOne", () => fetchPokemon(pokemonOneID), {
    onError: () => {
      setPokemonOneID(Math.floor(Math.random() * 1154));
      refetchPokemonOne();
    },
    onSuccess: (data) => {
      dispatch(setPokemonOne(data));
      dispatch(setPokemonOneHealth(data.stats[0].base_stat));
    },
    enabled: false,
    retry: 1,
  });

  const {
    isError: isPokemonTwoError,
    refetch: refetchPokemonTwo,
    isLoading: isPokemonTwoLoading,
  } = useQuery("pokemonTwo", () => fetchPokemon(pokemonTwoID), {
    onError: () => {
      setPokemonTwoID(Math.floor(Math.random() * 1154));
      refetchPokemonTwo();
    },
    onSuccess: (data) => {
      dispatch(setPokemonTwo(data));
      dispatch(setPokemonTwoHealth(data.stats[0].base_stat));
    },
    enabled: false,
    retry: 1,
  });

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
    /* ne radi */
    if (pokemonOne && pokemonTwo && pathname === "/") {
      navigate("/game");
    }
  }, [pokemonOne, pokemonTwo, pathname]);

  const newGame = () => {
    setPokemonOneID(Math.floor(Math.random() * 1154));
    setPokemonTwoID(Math.floor(Math.random() * 1154));
    dispatch(clearLogs());
    refetchPokemonOne();
    refetchPokemonTwo();
  };

  const pokemonOneHealth = useAppSelector(selectPokemonOneHealth);

  const newOpponent = () => {
    const newID = Math.floor(Math.random() * 1000) + 1;
    if (pokemonOneHealth === 0) {
      setPokemonOneID(newID === pokemonTwoID ? newID - 1 : newID);
      refetchPokemonOne();
      if (!pokemonTwo) return;
      dispatch(setPokemonTwoHealth(pokemonTwo.stats[0].base_stat));
    } else {
      setPokemonTwoID(newID === pokemonOneID ? newID - 1 : newID);
      refetchPokemonTwo();
      if (!pokemonOne) return;
      dispatch(setPokemonOneHealth(pokemonOne.stats[0].base_stat));
    }
  };

  return { newGame, newOpponent, isPokemonOneLoading, isPokemonTwoLoading };
};

export default useGetRandomPokemons;
