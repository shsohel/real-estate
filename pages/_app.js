import '@/styles/globals.css';
import { ThemeProvider } from 'next-theme';
import 'animate.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider serverState={store} store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider enableSystem={false} attribute="class">
          <div className=" min-h-screen text-black dark:text-white">
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}