import React from 'react'
import { Container, Title } from "./style"
import Menu from '../Menu'
import { useAppSelector } from '../../app/hooks'
import { selectLogs } from '../../features/logs/logsSlice'

const EndGameScreen = () => {
  const logs = useAppSelector(selectLogs)
  return (
    <Container>
      <Title>{logs.at(-1)}</Title>
      <Menu isEndGame/>
    </Container>
  )
}

export default EndGameScreen
