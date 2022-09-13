import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MarkDown Blog App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-5xl font-bold '>Hello world!</h1>
    </div>
  );
}
