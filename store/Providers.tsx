"use client";

import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { store } from "@/store";
import { setCredentials, setFailed, setLoading } from "@/store/auth/authSlice";
import apiClient from "@/lib/axios";

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
    <AppInitializer>{children}</AppInitializer>
  </Provider>;
}