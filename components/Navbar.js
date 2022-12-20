import React, { useState } from 'react'
import Link from 'next/link'
import { Button, createStyles, Drawer } from '@mantine/core'
import { CiSearch } from 'react-icons/ci'
import { useRouter } from 'next/router'
import { Burger } from '@mantine/core'


const Navbar = () => {
    // const router = useRouter()
    // const activeColor = (p) => router.pathname === p ? 'active' : 'non-active'
    const router = useRouter();
    const currentRoute = router.pathname;
    const useStyles = createStyles(() => ({
        button: {
            borderColor: '#000',
            color: '#000'
        }
    }))
    const { classes } = useStyles()
    const [opened, setOpened] = useState(false);
    const [drawer, setDrawer] = useState(false)
    const title = opened ? 'Close navigation' : 'Open navigation';
    return (
        <div className='mx-6 my-8'>
            <Link href='/'>
                <span className='bg-black text-white pl-3 pt-3 pr-1 text-2xl'>nu</span>
                <span className='text-2xl'>ntium.</span>
            </Link>
            <div className='ml-8 hidden md:inline-block'>
                <Link className={currentRoute === '/' ? "active" : "non-active"} href='/'>
                    Home
                </Link>
                <Link className={`ml-8 ${currentRoute === '/tags' ? "active" : "non-active"}}`} href='/tags'>
                    Tags
                </Link>
                <Link className='pl-8' href='#'>
                    About
                </Link>
            </div>
            <div className='float-right hidden md:block'>
                <CiSearch className='inline-block mr-5 text-3xl cursor-pointer' />
                <Button className={classes.button} component='a' href='#' variant='outline'>
                    Login
                </Button>
            </div>
            <Burger
                className='inline-block float-right md:hidden'
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title={title}
            />
            <Drawer
                opened={opened}
                position='right'
                size='sm'
                onClose={() => setOpened(false)}
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <div>
                    <Link onClick={() => setOpened(false)} className='block text-center hover:text-gray-600' href='/'>
                        Home
                    </Link>
                    <Link onClick={() => setOpened(false)} className='block text-center mt-8 hover:text-gray-600' href='/tags'>
                        Tags
                    </Link>
                    <Link onClick={() => setOpened(false)} className='block text-center mt-8 hover:text-gray-600' href='#'>
                        About
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar