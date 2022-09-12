import 'styles/globals.css';
import LayoutWithSidebar from 'components/layout-with-sidebar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWithSidebar>
      <Component {...pageProps} />
    </LayoutWithSidebar>
  );
}

export default MyApp;
