import React from 'react'
import Head from 'next/head'
import { Input, PasswordInput, Checkbox, Button } from '@mantine/core'
import { FiUser, FiKey } from 'react-icons/fi'
import Link from 'next/link'

const login = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Head>
                <title>Nuntium | Login</title>
            </Head>
            <div className='mx-6'>
                <form className='w-[324px] mx-auto leading-9 mt-32' onSubmit={handleForm}>
                    <div className='text-center'>
                        <h3 className='font-bold text-4xl'>Welcome back!</h3>
                        <p className='mt-4'>Sign in to get the most out of nuntium.</p>
                    </div>
                    <div className='mt-4'>
                        <Input
                            icon={<FiUser size={18} />}
                            placeholder="Username"
                            variant='filled'
                            size='md'
                        />
                        <PasswordInput
                            className='mt-4'
                            placeholder="Password"
                            variant='filled'
                            size='md'
                            icon={<FiKey size={18} />}
                        />
                        <div className='flex mt-4 text-gray-400'>
                            <Checkbox
                                label="Remember me"
                                className='text-gray-400'
                            />
                            <Link href='#' className='text-sm ml-20 mt-1'>Forgot Password?</Link>
                        </div>
                    </div>
                    <Button className='border-black text-black w-full text-xl mt-4' size='lg' type='submit' variant='outline'>
                        Login
                    </Button>
                </form>
            </div>
        </>
    )
}

export default login