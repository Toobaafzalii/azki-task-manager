"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppSpinner from "../components/appSpinner";

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <PersistGate loading={<AppSpinner />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
