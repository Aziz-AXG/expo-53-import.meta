import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import { BetterAuthStorage } from "@/db/mmkv";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8787",
  plugins: [
    expoClient({
      scheme: "expo53",
      storagePrefix: "expo53",
      storage: BetterAuthStorage,
    }),
  ],
});
