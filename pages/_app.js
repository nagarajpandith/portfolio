import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableColorScheme = "true">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}