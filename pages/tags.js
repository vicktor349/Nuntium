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
            <div className=' xl:mx-80 mt-32'>
                <Input.Wrapper className='mt-16 w-full'>
                    <Input
                        radius='xl'
                        size='lg'
                        className=''
                        placeholder='Find the topics you care about...'
                        rightSection={<CiSearch className='-ml-8' size={32} />}
                    />
                </Input.Wrapper>
            </div>
            <div className='mt-16 ml-48'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
            </div>
            <div className='mt-16 ml-16'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
            </div>
            <div className='mt-16 ml-32'>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
                <Link href='#' className='border-2 border-black py-2 px-4 rounded-3xl ml-8'>#technology</Link>
            </div>
        </>
    )
}

export default tags