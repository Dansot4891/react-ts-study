// data/auth.api.ts
import { auth } from "../../../../firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const authApi = {
  login: (email: string, pw: string) => signInWithEmailAndPassword(auth, email, pw),
  signup: (email: string, pw: string) => createUserWithEmailAndPassword(auth, email, pw),
  logout: () => signOut(auth),
};