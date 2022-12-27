import Image from 'next/image'
import React from 'react'
import ArticleImage from '../public/img/Article-Image.png'


const FeaturedArticle = () => {

    return (
        <div className="bg-hero hidden  md:pb-24 md:block lg:pb-64 xl:object-contain pl-8">
            <div className=' left-8 px-6 py-12 -top-10 sm:w-7/12 bg-white md:w-5/12 pt-6 pb-6 xl:w-2/6'>
                <p className='text-gray-500'>FEATURED ARTICLE</p>
                <h3 className=' md:text-xl lg:text-2xl font-bold'>
                    World&apos;s Most Dangerous Technology Ever Made.
                </h3>
                <div className='my-2'>
                    <p className='text-gray-500 inline-block'>Ralph Hawkins</p>
                    <p className='text-gray-500 inline-block mx-2'>.</p>
                    <p className='text-gray-500 inline-block'>May 7, 2019 (10 mins read)</p>
                </div>
                <div>
                    <p className='leading-6'>
                        Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt.
                        Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
                        Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticle