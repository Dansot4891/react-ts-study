// store/authSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase.js";

type User = { uid: string; email: string | null };
type AuthState = {
  user: User | null;
  status: "completed" | "loading" | "error";
  error?: string;
};

const initialState: AuthState = { user: null, status: "completed" };

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, pw }: { email: string; pw: string }) => {
    const { user } = await signInWithEmailAndPassword(auth, email, pw);
    return { uid: user.uid, email: user.email } as User;
  }
);

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async ({ email, pw }: { email: string; pw: string }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, pw);
    return { uid: user.uid, email: user.email } as User;
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => { await signOut(auth); });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, a: PayloadAction<User | null>) { state.user = a.payload; },
  },
  extraReducers: (b) => {
    const pend = (t: any) => b.addCase(t.pending,  s => { s.status = "loading"; s.error = undefined; });
    const ok   = (t: any) => b.addCase(t.fulfilled, (s, a: PayloadAction<User|void>) => {
      s.status = "completed"; if (a.payload) s.user = a.payload as User; else s.user = null;
    });
    const fail = (t: any) => b.addCase(t.rejected,  (s, a) => { s.status = "error"; s.error = String(a.error?.message ?? "failed"); });

    pend(loginThunk);  ok(loginThunk);  fail(loginThunk);
    pend(signupThunk); ok(signupThunk); fail(signupThunk);
    pend(logoutThunk); ok(logoutThunk); fail(logoutThunk);
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;