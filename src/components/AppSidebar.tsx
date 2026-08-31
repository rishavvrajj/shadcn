"use client";

import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";

import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  FileText,
  FolderKanban,
  HelpCircle,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Users,
  User2,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const mainNavigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Users",
    url: "/",
    icon: Users,
  },
  {
    title: "Calendar",
    url: "/",
    icon: CalendarDays,
  },
  {
    title: "Notifications",
    url: "/",
    icon: Bell,
  },
];

const managementNavigation = [
  {
    title: "Projects",
    url: "/",
    icon: FolderKanban,
  },
  {
    title: "Documents",
    url: "/",
    icon: FileText,
  },
  {
    title: "Security",
    url: "/",
    icon: ShieldCheck,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar side="left" collapsible="icon">
      {/* Brand */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Rishav Admin"
              className="justify-start group-data-[collapsible=icon]:justify-center"
              render={
                <Link href="/" className="flex w-full items-center gap-2 mt-2">
                  <Image
                    src="/logo.png"
                    alt="Admin Logo"
                    width={8}
                    height={8}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-4 w-4"
                  />

                  <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
                    rishav raj
                  </span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="w-full">
        {/* Overview */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">
            Overview
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="justify-start group-data-[collapsible=icon]:justify-center"
                      render={
                        <Link
                          href={item.url}
                          className="flex w-full items-center gap-2"
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="group-data-[collapsible=icon]:hidden">
                            {item.title}
                          </span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Management */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">
            Management
          </SidebarGroupLabel>

          <SidebarGroupAction title="Add project">
            <Plus />
            <span className="sr-only">Add project</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {managementNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="justify-start group-data-[collapsible=icon]:justify-center"
                      render={
                        <Link
                          href={item.url}
                          className="flex w-full items-center gap-2"
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="group-data-[collapsible=icon]:hidden">
                            {item.title}
                          </span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Workspace */}
        <Collapsible>
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold">
              <CollapsibleTrigger className="flex w-full items-center">
                <span>Workspace</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="All Projects"
                      render={
                        <Link
                          href="/admin/projects"
                          className="flex items-center gap-2"
                        >
                          <FolderKanban className="size-4" />
                          <span className="group-data-[collapsible=icon]:hidden">
                            All Projects
                          </span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Project Reports"
                      render={
                        <Link
                          href="/admin/reports"
                          className="flex items-center gap-2"
                        >
                          <FileText className="size-4" />
                          <span className="group-data-[collapsible=icon]:hidden">
                            Project Reports
                          </span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator />

        {/* Administration */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">
            Administration
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Settings"
                  className="justify-start group-data-[collapsible=icon]:justify-center"
                  render={
                    <Link
                      href="/admin/settings"
                      className="flex w-full items-center gap-2"
                    >
                      <Settings className="size-4" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        Settings
                      </span>
                    </Link>
                  }
                />
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Help Center"
                  className="justify-start group-data-[collapsible=icon]:justify-center"
                  render={
                    <Link
                      href="/admin/help"
                      className="flex w-full items-center gap-2"
                    >
                      <HelpCircle className="size-4" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        Help Center
                      </span>
                    </Link>
                  }
                />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User menu */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    tooltip="Rishav's account"
                    className="justify-start group-data-[collapsible=icon]:justify-center"
                  >
                    <User2 className="size-4" />

                    <span className="group-data-[collapsible=icon]:hidden">
                      Rishav
                    </span>

                    <ChevronUp className="ml-auto group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                }
              />

              <DropdownMenuContent side="top" align="start">
                <DropdownMenuItem>
                  <User2 className="mr-2 size-4" />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}