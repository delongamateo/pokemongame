import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PokeAPI } from 'pokeapi-types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByID: builder.query<PokeAPI.Pokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetPokemonByIDQuery } = pokemonApi