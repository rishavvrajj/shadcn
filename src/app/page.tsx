import React from 'react'

import { AppBarChart } from '@/components/AppBarChart';
import { AppAreaChart } from '@/components/AppAreaChart';
import { AppPieChart } from '@/components/AppPieChart';

import TodoList from '@/components/TodoList';
import PopularContent from '@/components/PopularContent';
import LiveListeners from '@/components/LiveListeners';

export default function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-2 px-4 py-2 h-full'>
      <div className='bg-card h-full rounded-lg p-2 lg:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-card h-full rounded-lg p-2'>
        <LiveListeners />
      </div>
      <div className='bg-card h-full rounded-lg p-2'>
        <AppPieChart />
      </div>
      <div className='bg-card h-full rounded-lg p-2'>
        <PopularContent />
      </div>
      <div className='bg-card h-full rounded-lg p-2 lg:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-card h-full rounded-lg p-2'>
        <TodoList />
      </div>
    </div>
  )
};