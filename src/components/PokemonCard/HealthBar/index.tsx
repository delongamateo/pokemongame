import { FC, useEffect, useState } from 'react'
import { Container, Value, Bar } from "./style"


type HealthBarProps = {
  health: number;
  startHealth: number;
}

const HealthBar: FC<HealthBarProps> = ({ health, startHealth }) => {
  const [healthPercentage, setHealthPercentage] = useState<number>(100)

  useEffect(() => {
    setHealthPercentage(Math.floor((health / startHealth) * 100))
  }, [startHealth, health, setHealthPercentage])

  return (
    <Container>
      <Value health={healthPercentage}>{`${healthPercentage} %`}</Value>
      <Bar health={healthPercentage} />
    </Container>
  )
}

export default HealthBar;
