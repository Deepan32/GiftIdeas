import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Layout({title,children}){
    return(
        <>
            <Head>
                <title>{title ? title + ' - Amazona' : 'giftIdeas'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div 
            className="flex min-h-screen flex-col justify-between"
            >
                <header>
                    <nav className="flex h-12 px-4 items-center justify-between shadow-md">
                        <Link href="/">
                            <a
                            className='text-lg font-bold'
                            >
                                Gifting Ideas
                            </a>
                        </Link>
                        <div>
                            <Link href="/cart"><a className='p-2'>Cart</a></Link>
                            <Link href="/login"><a className='p-2'>Login</a></Link>

                        </div>
                    </nav>
                </header>
                <main>
                {children}
                </main>
                <footer>
                    footer
                </footer>
            </div>
        </>
    )
}