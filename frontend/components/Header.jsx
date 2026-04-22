import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { Cookie, Refrigerator } from 'lucide-react';
import UserDropdown from './UserDropdown';
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
                <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
                    <Link 
                    href="/recipes"
                    className="hover:text-orange-600 tranisiton-colors flex gap-1.5 items-center"
                    >
                    <Cookie className='w-4 h-4'/>
                    My Recipes
                    </Link>

                    <Link
                    href="/pantry"
                    className="hover:text-orange-600 trasition-colors flex gap-1.5"
                    >
                        <Refrigerator className='w-4 h-4'/>
                        My Pantry
                    </Link>

                </div>


                <div className="flex items-center space-x-4">

                    <Show when="signed-in">
                        <UserDropdown />
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
