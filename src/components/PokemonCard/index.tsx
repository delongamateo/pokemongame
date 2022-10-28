import { FC } from "react";
import {
  Card,
  Name,
  Image,
  Stats,
  Title,
  StatsContainer,
  Stat,
  BackImage,
  LastLog,
} from "./style";
import { PokeAPI } from "pokeapi-types";
import HealthBar from "./HealthBar";
import { useAppSelector } from "../../app/hooks";
import { selectLastLog } from "../../features/logs/logsSlice";

type PokemonCardProps = {
  pokemon: PokeAPI.Pokemon;
  health: number;
  side: string;
  isAttackInProgress: boolean;
  isAttacking?: string;
  isPokemonFetching: boolean;
};

const PokemonCard: FC<PokemonCardProps> = ({
  pokemon,
  health,
  side,
  isAttackInProgress,
  isAttacking,
  isPokemonFetching,
}) => {
  const { name, sprites, stats } = pokemon;
  const lastLog = useAppSelector(selectLastLog);

  return (
    <Card>
      {isPokemonFetching ? (
        <BackImage src="/assets/pokeCardBack.png" />
      ) : (
        <>
          <HealthBar health={health} startHealth={stats[0].base_stat} />
          <LastLog side={side}>{side !== isAttacking ? lastLog : ""}</LastLog>
          <Name>{name}</Name>
          <Image
            src={sprites?.front_default}
            side={side}
            isAttackInProgress={isAttackInProgress}
            isAttacking={isAttacking}
          />
          <Stats>
            <Title>Stats</Title>
            <StatsContainer>
              {stats?.map(
                (stat, i) =>
                  stat.stat.name !== "special-attack" &&
                  stat.stat.name !== "special-defense" && (
                    <Stat key={i}>{`${stat.stat.name}: ${stat.base_stat}`}</Stat>
                  )
              )}
            </StatsContainer>
          </Stats>
        </>
      )}
    </Card>
  );
};

export default PokemonCard;
