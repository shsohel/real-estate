import "@/styles/globals.css";
import { ThemeProvider } from "next-theme";
import "animate.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store";
import { persistStore } from "redux-persist";
import { usePageLoader } from "@/utils/hooks/usePageLoader";
import ProgressLoader from "@/components/customs/ProgressLoader";
import { ToastContainer } from "react-toastify";
const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  const { isPageLoading } = usePageLoader();
  return (
    <Provider serverState={store} store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider enableSystem={false} attribute="class">
          <ProgressLoader isProgress={isPageLoading}>
            <div className=" min-h-screen text-black dark:text-white">
              <Component {...pageProps} />
              <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
              />
            </div>
          </ProgressLoader>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
