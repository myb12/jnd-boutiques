import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the user data
interface User {
  id: number;
  email: string;
  name: string;
}

// Define the shape of the authentication state
interface AuthState {
  user: User | null;
  token: string | null;
}

// Check for data in local storage on initial load
const getInitialState = (): AuthState => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return {
      user: user ? JSON.parse(user) : null,
      token: token || null,
    };
  }
  return { user: null, token: null };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    setCredentials(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Store in local storage
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    logOut(state) {
      state.user = null;
      state.token = null;
      // Remove from local storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;