// features/auth/auth.slice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../data/dto/user_type";

type Status = "completed" | "loading" | "error";
type AuthState = { user: UserType; status: Status; error?: string };
const initialState: AuthState = { user: { email: "", displayName: "" }, status: "completed" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (s) => { s.status = "loading"; s.error = undefined; },
    setUser: (s, a: PayloadAction<UserType>) => { s.user = a.payload; s.status = "completed"; },
    setError: (s, a: PayloadAction<string>) => { s.status = "error"; s.error = a.payload; },
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;
export default authSlice.reducer;