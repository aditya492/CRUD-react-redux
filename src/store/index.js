import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: { name: "", email: "", password: "" },
  },
  reducers: {
    signupUser(state, action) {
      const { name, email, password } = action.payload;
      state.user.name = name;
      state.user.email = email;
      state.user.password = password;
    },
    loginUser(state, action) {
      state.isAuthenticated = true;
    },
    logoutUser(state, action) {
      state.isAuthenticated = false;
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
    },
  },
});

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documents: [],
  },
  reducers: {
    addDocument(state, action) {
      const { id, title, body } = action.payload;
      state.documents.unshift({
        id,
        title,
        body,
      });
    },
    deleteDocument(state, action) {
      const { id } = action.payload;
      console.log(id);
      state.documents = state.documents.filter((document) => document.id != id);
    },
  },
});

const authActions = authSlice.actions;
const documentActions = documentSlice.actions;

//////////////////////////////////////
// ACTIONS

export const signupUser = (name, email, password) => (dispatch) => {
  dispatch(authActions.signupUser({ name, email, password }));
};

export const loginUser = () => (dispatch) => {
  dispatch(authActions.loginUser());
};

export const logoutUser = () => (dispatch) => {
  dispatch(authActions.logoutUser());
};

export const addDocument = (title, body) => (dispatch) => {
  const id = Date.now();
  dispatch(documentActions.addDocument({ id, title, body }));
};

export const deleteDocument = (id) => (dispatch) => {
  dispatch(documentActions.deleteDocument({ id }));
};

const store = configureStore({
  reducer: { auth: authSlice.reducer, document: documentSlice.reducer },
});

export default store;
