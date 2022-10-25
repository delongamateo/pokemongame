import { FC } from 'react'
import { Card, Name, Image, Stats, Title, StatsContainer, Stat } from "./style"
import { PokeAPI } from "pokeapi-types";
import HealthBar from "./HealthBar"

type PokemonCardProps = {
    pokemon: PokeAPI.Pokemon
    health: number;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon, health }) => {
    const { name, sprites, stats } = pokemon

    return (
        <Card>
            <HealthBar health={health} startHealth={stats[0].base_stat}/>
            <Name>{name}</Name>
            <Image src={sprites?.front_default} />
            <Stats>
                <Title>Stats</Title>
                <StatsContainer>
                    {stats?.map((stat) => (
                        stat.stat.name !== "special-attack" &&
                        stat.stat.name !== "special-defense" &&
                        <Stat>{`${stat.stat.name}: ${stat.base_stat}`}</Stat>
                    ))}
                </StatsContainer>
            </Stats>

        </Card>
    )
}

export default PokemonCard
