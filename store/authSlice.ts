// store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // This action will be called after a successful login API call
    setCredentials(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user;
      state.status = 'succeeded';
    },
    // This action will be called to clear the Redux state
    clearCredentials(state) {
      state.user = null;
      state.status = 'idle';
    },
    setLoading(state) {
      state.status = 'loading';
    },
    setFailed(state) {
      state.status = 'failed';
      state.user = null;  
    },
  },
});

export const { setCredentials, clearCredentials, setLoading, setFailed } = authSlice.actions;

export default authSlice.reducer;