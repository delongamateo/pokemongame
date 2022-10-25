import { FC, useState } from 'react'
import { Container, Value, Bar } from "./style"


type HealthBarProps = {
  health: number;
  startHealth: number;
}

const HealthBar: FC<HealthBarProps> = ({ health, startHealth }) => {
  const [healthPercentage, setHealthPercentage] = useState<number>(100)

  const calculatePercentage = () => {
    
  }

  return (
    <Container>
      <Value health={health}>{`${health} %`}</Value>
      <Bar health={health} />
    </Container>
  )
}

export default HealthBar;
