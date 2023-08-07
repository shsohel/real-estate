import '@/styles/globals.css';
import { ThemeProvider } from 'next-theme';
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <div className=" min-h-screen text-black dark:text-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
