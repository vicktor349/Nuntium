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
            <div className='mx-12'>
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
                <div className='mt-8 grid xl:grid-cols-5 gap-6 text-center'>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8' >Technology</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>Life and love</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>essentialism</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>webdevelopment</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>fashion</Link>
                </div>
                <div className='mt-8 grid xl:grid-cols-7 gap-6 text-center'>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>architecture</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>sports</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 pr-8'>entertainment</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>culinaryarts</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>travel</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>aeronautics</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>games</Link>
                </div>
                <div className='mt-8 grid xl:grid-cols-6 gap-6 text-center'>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>minimalism</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>finearts</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>graphicsdesign</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>filmmaking</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8' >bitcoin</Link>
                    <Link href='#' className='border-2 border-black border-solid rounded-md py-4 px-8'>computers</Link>
                </div>
            </div>
        </>
    )
}

export default tags