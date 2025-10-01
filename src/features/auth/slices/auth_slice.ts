// features/auth/auth.slice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../domain/repo/auth_repo";

type Status = "idle" | "loading" | "error";
type AuthState = { user: User; status: Status; error?: string };
const initialState: AuthState = { user: { email: undefined }, status: "idle" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (s) => { s.status = "loading"; s.error = undefined; },
    setUser: (s, a: PayloadAction<User>) => { s.user = a.payload; s.status = "idle"; },
    setError: (s, a: PayloadAction<string>) => { s.status = "error"; s.error = a.payload; },
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;
export default authSlice.reducer;