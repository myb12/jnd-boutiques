"use client";

import React, { useEffect } from "react";
import apiClient from "@/lib/axios";
import { Provider } from "react-redux";

import { persistor, store } from "@/store";
import { setCredentials, setFailed, setLoading } from "@/store/auth/authSlice";
import { PersistGate } from "redux-persist/integration/react";

function AppInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = store.dispatch;

  useEffect(() => {
   async function fetchUser() {
      dispatch(setLoading());
      try {
        const response = await apiClient.get('/auth/me');
        dispatch(setCredentials({ user: response.data.user }));
      } catch (err) {
        dispatch(setFailed());
      }
    }
    fetchUser();
  }, [dispatch]);

  return <>{children}</>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppInitializer>{children}</AppInitializer>
    </PersistGate>
  </Provider>;
}