import React from 'react'

import { AppBarChart } from '@/components/AppBarChart';
import { AppAreaChart } from '@/components/AppAreaChart';
import { AppPieChart } from '@/components/AppPieChart';
import CardList from '@/components/CardList';
import TodoList from '@/components/TodoList';

export default function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 h-full'>
      <div className='bg-card h-full rounded-lg p-4 lg:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-card h-full rounded-lg p-4'>
        <CardList title={'Active Customers'} />
      </div>
      <div className='bg-card h-full rounded-lg p-4'>
        <AppPieChart />
      </div>
      <div className='bg-card h-full rounded-lg p-4'>
        <CardList title={'Popular Content'} />
      </div>
      <div className='bg-card h-full rounded-lg p-4 lg:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-card h-full rounded-lg p-4'>
        <TodoList />
      </div>
    </div>
  )
};