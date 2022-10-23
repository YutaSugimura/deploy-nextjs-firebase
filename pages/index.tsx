import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen flex flex-col px-4 py-2">
        <h1 className="text-2xl font-bold">Top</h1>
      </main>

      <footer className="px-4">
        <p className="text-sm">&copy; 2022</p>
      </footer>
    </div>
  );
};

export default Home;
