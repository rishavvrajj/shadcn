'use client'

import Link from "next/link";
import Image from "next/image";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

import { Calendar, ChevronDownIcon, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Inbox",
        url: "/",
        icon: Inbox
    },
    {
        title: "Calender",
        url: "/",
        icon: Calendar
    },
    {
        title: "Search",
        url: "/",
        icon: Search
    },
    {
        title: "Settings",
        url: "/",
        icon: Settings
    },
]

export default function AppSidebar() {
    return (
        <Sidebar side="left" collapsible="icon">

            {/* Sidebar content */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={
                                <Link href='/'>
                                    <Image src="/vercel.svg" alt="profile" width={20} height={20} />
                                    <span>rishav raj</span>
                                </Link>
                            }
                        />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>

                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="cursor-pointer space-y-5">
                                        <a href={item.url} className="flex items-center space-x-2">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /><span className="sr-only">Add Projects</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={
                                        <Link href={'/'}><Projector />See All Projects</Link>
                                    }
                                />
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={
                                        <Link href={'/'}><Plus />Add Projects</Link>
                                    }
                                />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <Collapsible>
                    <SidebarGroup>
                        <SidebarGroupLabel
                            render={
                                <CollapsibleTrigger>
                                    <span>Product details</span>
                                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                                </CollapsibleTrigger>
                            }
                        />
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            render={
                                                <Link href={'/'}><Projector />See All Projects</Link>
                                            }
                                        />
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            render={
                                                <Link href={'/'}><Plus />Add Projects</Link>
                                            }
                                        />
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={
                                        <Link href={'/'}><Projector />See All Projects</Link>
                                    }
                                />
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton
                                            render={
                                                <Link href={'/'}><Plus /> Add Project</Link>
                                            }
                                        />
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton
                                            render={
                                                <Link href={'/'}><Plus /> Add Project</Link>
                                            }
                                        />
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton
                                            render={
                                                <Link href={'/'}><Plus /> Add Project</Link>
                                            }
                                        />
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    render={
                                        <Link href={'/'}><Plus />Add Projects</Link>
                                    }
                                />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            {/* Sidebar Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem className="cursor-pointer">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <SidebarMenuButton>
                                        <User2 /> rishav raj <ChevronUp className="ml-auto" />
                                    </SidebarMenuButton>
                                }
                            />
                            <DropdownMenuContent>
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};