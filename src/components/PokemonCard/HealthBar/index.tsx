import {FC} from 'react'
import {Container, Value, Bar} from "./style"

type HealthBarProps = {
    value: number;
}

const HealthBar: FC<HealthBarProps> = ({value}) => {
  return (
   <Container>
    <Value>{value}</Value>
    <Bar value={value} />
   </Container>
  )
}

export default HealthBar;
