import {createSlice, configureStore} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user:"", isLoggedIn: false,
  todos: []}, 
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    clearTodos(state) {
      state.todos = []; // Clear todos array
    },
  }
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer
});
