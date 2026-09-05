'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AppLineChart } from '@/components/AppLineChart'
import LiveListeners from '../../../components/LiveListeners'

export default function User() {
  return (
    <div className='p-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<a href="/users" />}>
              Users
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>rishav</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Container */}
      <div className='mt-4 flex flex-col xl:flex-row gap-8'>
        {/* Left */}
        <div className='w-full xl:w-1/3 space-y-6'>
          {/* User Badge Container */}
          <div className="bg-card p-4 rounded-lg">
            <h1 className='text-xl font-semibold'>User Badge</h1>
            <div className='flex gap-4 mt-4'>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border border-blue-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been Verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus size={36} className='rounded-full bg-orange-500/30 border border-orange-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been Verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy size={36} className='rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been Verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield size={36} className='rounded-full bg-green-500/30 border border-green-500/50 p-2' />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className='font-bold mb-2'>Verified User</h1>
                  <p className='text-sm text-muted-foreground'>This user has been Verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information Container */}
          <div className="bg-card p-4 rounded-lg flex flex-col justify-between">
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>User Information</h1>
              <Sheet>
                <SheetTrigger
                  render={<Button>Edit User</Button>}
                />
                <EditUser />
              </Sheet>
            </div>
            <div className='space-y-4 mt-4'>
              <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                <Progress value={76} className="w-full">
                  <ProgressLabel>Upload progress</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>Username: </span>
                <span>rishav</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>Email: </span>
                <span>rishav5raj3@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>Phone: </span>
                <span>+1 234 5678</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>Location: </span>
                <span>New York, NY</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>Role: </span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>Joined on 2025.01.01</p>
          </div>
          {/* Card List Container */}
          <div className="bg-card p-4 rounded-lg">
            <LiveListeners />
          </div>
        </div>
        {/* Right */}
        <div className='w-full xl:w-2/3 space-y-6'>
          {/* User Card Container */}
          <div className="bg-card p-4 rounded-lg space-y-2">
            <div className='flex items-center gap-2'>
              <Avatar className={'size-12'}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className='text-xl font-semibold'>Rishav Raj</h1>
            </div>
            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fuga est labore odio quasi, sequi, nesciunt, ea quisquam ab error dignissimos reiciendis suscipit voluptas numquam distinctio vel delectus animi eveniet.
              Similique vel aperiam ipsa ducimus non tempore nisi quam quibusdam repellendus fugiat! Officiis sit iste eius vero, tenetur eaque sed inventore esse officia nulla temporibus exercitationem illo hic, corrupti sint?
            </p>
          </div>
          {/* Chart Container */}
          <div className="">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  )
};