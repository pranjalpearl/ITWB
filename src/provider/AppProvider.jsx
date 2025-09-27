"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/Redux/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function AppProvider({ children }) {
  // Initialize QueryClient once
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
