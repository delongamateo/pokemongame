import { FC } from 'react'
import { Card, Name, Image, Stats, Title, StatsContainer, Stat } from "./style"
import { PokeAPI } from "pokeapi-types";
import HealthBar from "./HealthBar"
import { useAppSelector } from '../../app/hooks';
import { selectLastLog } from '../../features/logs/logsSlice';

type PokemonCardProps = {
    pokemon: PokeAPI.Pokemon
    health: number;
    side: string;
    isAttackInProgress: boolean;
    isAttacking?: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon, health, side, isAttackInProgress, isAttacking }) => {
    const { name, sprites, stats } = pokemon
    const lastLog = useAppSelector(selectLastLog)

    return (
        <Card>
            <HealthBar health={health} startHealth={stats[0].base_stat} />
            {side !== isAttacking && <p>{lastLog}</p>}
            <Name>{name}</Name>
            <Image src={sprites?.front_default} side={side} isAttackInProgress={isAttackInProgress} isAttacking={isAttacking} />
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
