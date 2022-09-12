import Head from 'next/head';
import { ReactElement } from 'react';
import Sidebar from 'components/sidebar';

export default function LayoutWithSidebar({ children }: { children: ReactElement }) {
  return (
    <div className="min-h-screen max-h-screen flex overflow-hidden">
      <Head>
        <title>Harbour Masters</title>
        <meta name="description" content="Harbour Masters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
