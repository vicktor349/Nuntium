import Head from 'next/head'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <>
      <Head>
        <title>
          Nuntium | Home
        </title>
      </Head>
      <div className='mx-6 my-8'>
        <Navbar />
      </div>
    </>
  )
}
