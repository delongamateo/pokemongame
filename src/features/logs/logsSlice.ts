import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface logsState {
  logs: string[];
  lastLog: string;
}

const initialState: logsState = {
  logs: [],
  lastLog: ""
};

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<string>) => {
      state.logs = [...state.logs, action.payload];
    },
    clearLogs: (state) => { state.logs = [] },
    setLastLog: (state, action: PayloadAction<string>) => {
      state.lastLog = action.payload
    }
  },
});

export const { addLog, clearLogs, setLastLog } = logsSlice.actions;

export const selectLogs = (state: RootState) => state.logs.logs;

export const selectLastLog = (state: RootState) => state.logs.lastLog

export default logsSlice.reducer;
