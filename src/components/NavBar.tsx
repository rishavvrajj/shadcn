'use client'

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { LogOut, Menu, Moon, Settings, Sun, User } from 'lucide-react'

import Link from 'next/link'
import { useTheme } from 'next-themes'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from './ui/sidebar'

export default function NavBar() {

    const { theme, setTheme } = useTheme();

    return (
        <nav className='flex items-center justify-between px-2 pt-4 w-full sticky top-0 z-10 bg-background'>

            {/* Nav */}
            <div className='flex items-center justify-center space-x-2'>
                <SidebarTrigger size={"icon-lg"}/>
                <Link className='text-sm cursor-pointer' href='/'>Dashboard</Link>
            </div>

            {/* Menu */}
            <div className='flex items-center justify-end space-x-2'>

                {/* Theme Menu */}
                <DropdownMenu>
                <DropdownMenuTrigger
                    render={<Button variant="outline" size="icon" className="cursor-pointer"/>}
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                
                {/* User Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar size='sm' className="cursor-pointer mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className='h-{1.2rem} w-{1.2rem} mr-2 cursor-pointer' />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className='h-{1.2rem} w-{1.2rem} mr-2 cursor-pointer' />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuGroup>
                            <DropdownMenuItem variant='destructive'>
                                <LogOut className='h-{1.2rem} w-{1.2rem} mr-2 cursor-pointer' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
