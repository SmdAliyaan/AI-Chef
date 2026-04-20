import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
const Header = async () => {
    const user = null; // Replace with actual user state from Clerk
    return (
        <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
            <nav className='container w-full px-6  h-16 flex items-center justify-between'>
                <Link href = {user ? "/dashboard" :"/"}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="w-16"
                />
                </Link>
                <div>Nav Links</div>


                <div className="flex items-center space-x-4">

                    <Show when="signed-in">
                        <UserButton />
                    </Show>


                    <Show when="signed-out" >
                        <SignInButton mode = 'modal' variant='ghost' className='text-stone-600 hover:text-orange-600 hover:bg-orangr-50 font-medium'>Sign In</SignInButton>
                        <SignUpButton mode='modal'>
                            <Button variant="primary" className="rounded-full px-6">
                                Get Started</Button>
                        </SignUpButton>
                    </Show>
                </div>
            </nav>
        </header>
    )
}

export default Header;
