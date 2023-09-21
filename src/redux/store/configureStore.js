//Le store est le conteneur qui détient l'état global de l'application. Il est créé en utilisant la fonction configureStore de Redux. Le store est responsable de la gestion de l'état de l'application.

// on crée le store en utilisant configureStore de Redux Toolkit, on passe le rootReducer et on ajoute thunk à la liste des middlewares pour gérer pour toutes les actions asynchrones que l'on dispatche dans l'application.

import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers"; // importe ton rootReducer
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
