import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Loader from "./widgets/loader.tsx";

const container = document.getElementById("root")!;
const root = createRoot(container);

const simulateRehydration = new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

const persistor = persistStore(store, {}, () => simulateRehydration);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
