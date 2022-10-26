import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface logsState {
  logs: string[];
}

const initialState: logsState = {
  logs: [],
};

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<string>) => {
      state.logs = [...state.logs, action.payload];
    },
    clearLogs: (state) => { state.logs = [] },
  },
});

export const { addLog, clearLogs } = logsSlice.actions;

export const selectLogs = (state: RootState) => state.logs.logs;

export default logsSlice.reducer;
