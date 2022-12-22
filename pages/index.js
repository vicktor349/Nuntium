import Head from 'next/head'
import FeaturedArticle from '../components/FeaturedArticle'
import EditorsPick from '../components/EditorsPick'
import FeatureArticle from '../components/FeatureArticle'



export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Nuntium | Home
                </title>
            </Head>
            <div className='mx-6 my-8'>
                <FeaturedArticle />
                <EditorsPick />
                <FeatureArticle />
            </div>
        </>
    )
}