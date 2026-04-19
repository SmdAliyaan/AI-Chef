import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b border-stone-200 bg-stone50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                logo
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
