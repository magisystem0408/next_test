import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface TITLE {
    title: string
}

const Layout: React.FC<TITLE> = ({children, title = "Nextjs"}) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>

                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <Link href="/">
                            <a href=""
                               data-testid="home-nav"
                               className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Home
                            </a>
                        </Link>
                        <Link href="/blog-page">
                            <a href=""
                               data-testid="blog-nav"
                               className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Blog
                            </a>
                        </Link>

                        <Link href="/comment-page">
                            <a href=""
                               data-testid="comment-nav"
                               className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Comment
                            </a>
                        </Link>
                        <Link href="/context-page">
                            <a href=""
                               data-testid="context-nav"
                               className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Context
                            </a>
                        </Link>
                        <Link href="/task-page">
                            <a href=""
                               data-testid="task-nav"
                               className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Todos
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
            <Image src="/varcel.svg}" alt="vercel logo"　height={72} width={16} />
            </footer>
        </div>
    )
}


export default Layout