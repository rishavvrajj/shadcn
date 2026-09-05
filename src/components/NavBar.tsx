'use client'

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'

export default function NavBar() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme();

    const segments = pathname.split("/").filter(Boolean)

    const routeLabels: Record<string, string> = {
        dashboard: "Dashboard",
        profile: "Profile",
        settings: "Settings",
        projects: "Projects",
        analytics: "Analytics",
    }

    const formatSegment = (segment: string) => {
        return (
            routeLabels[segment] ??
            decodeURIComponent(segment)
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
        )
    }

    return (
        <nav className='flex items-center justify-between px-2 pt-2 w-full sticky z-10 bg-background'>

            {/* Nav */}
            <div className='flex items-center justify-center'>
                <SidebarTrigger size={"icon-lg"} />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<Link href="/" />}>
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {segments.map((segment, index) => {
                            const href = `/${segments.slice(0, index + 1).join("/")}`
                            const isCurrentPage = index === segments.length - 1

                            return (
                                <div key={href} className="contents">
                                    <BreadcrumbSeparator />

                                    <BreadcrumbItem>
                                        {isCurrentPage ? (
                                            <BreadcrumbPage>
                                                {formatSegment(segment)}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink render={<Link href={href} />}>
                                                {formatSegment(segment)}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                </div>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Menu */}
            <div className='flex items-center justify-end space-x-2'>

                {/* Theme Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={<Button variant="outline" size="icon" className="cursor-pointer" />}
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
                    <DropdownMenuTrigger
                        render={<Button variant="outline" size="icon" className="cursor-pointer mr-2" />}
                    >
                        <Avatar size='sm' className="cursor-pointer">
                            <AvatarImage src="/favicon.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className='h-[1.2rem] w-[1.2rem] cursor-pointer' />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className='h-[1.2rem] w-[1.2rem] cursor-pointer' />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuGroup>
                            <DropdownMenuItem variant='destructive'>
                                <LogOut className='h-[1.2rem] w-[1.2rem] cursor-pointer' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
