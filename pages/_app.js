import '@/styles/globals.css';
import Head from 'next/head'
import { ThemeProvider } from 'next-themes';
import { meta } from '@/data/config';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableColorScheme = "true">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}