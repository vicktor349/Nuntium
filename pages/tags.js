import React from 'react'
import Head from 'next/head'
import { Input } from '@mantine/core'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'


const tags = () => {
    return (
        <>
            <Head>
                <title>Nuntium | Tags</title>
            </Head>
            <div className='md:mt-40 lg:mt-40 xl:mt-32'>
                <Input.Wrapper className='mt-16'>
                    <Input
                        radius='xl'
                        size='lg'
                        className='sm:mx-72 md:mx-72 lg:mx-80 xl:mx-96'
                        placeholder='Find the topics you care about...'
                        rightSection={<CiSearch className='-ml-8' size={32} />}
                    />
                </Input.Wrapper>
            </div>
            <div className='md:mt-16 md:ml-64 lg:mt-16 lg:ml-80 xl:mt-16  xl:ml-48'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden lg:hidden'>#lifeandlove</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#essentialism</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#webdevelopment</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden md:inline-block'>#fashion</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#lifestyle</Link>
            </div>
            <div className='md:mt-16 md:ml-24 lg:ml-36 lg:mt-16 xl:mt-16 xl:ml-24'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#architecture</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#sports</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden md:inline-block'>#entertainment</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#culinaryarts</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#travel</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8  sm:hidden lg:hidden'>#worldhistory</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden md:inline-block'>#aeronautics</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#games</Link>
            </div>
            <div className='md:mt-16 md:ml-44 lg:ml-72 mt-16 xl:mt-16 xl:ml-32'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#minimalism</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#finearts</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden md:inline-block'>#graphicsdesign</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block'>#filmmaking</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 sm:hidden xl:inline-block' >#bitcoin</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8 xsm:hidden sm:inline-block'>#computers</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8  sm:hidden lg:hidden'>#machinelearning</Link>
            </div>
        </>
    )
}

export default tags