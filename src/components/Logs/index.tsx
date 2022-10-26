import React from 'react'
import { Container, Title, LogsContainer, Log } from "./style"
import { useAppSelector } from '../../app/hooks'
import { selectLogs } from '../../features/logs/logsSlice'

const Logs = () => {
    const logs = useAppSelector(selectLogs)
    return (
        <Container>
            <Title>Logs</Title>
            <LogsContainer>
                {logs.map(log => (
                    <Log>{log}</Log>
                ))}
            </LogsContainer>
        </Container>
    )
}

export default Logs;
