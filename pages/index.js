import Head from "next/head";
import HomePage from "./Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Asare| Frontend Web Developer| Mobile App Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
