import React from 'react'

import { AppBarChart } from '@/components/AppBarChart';
import { AppAreaChart } from '@/components/AppAreaChart';
import { AppPieChart } from '@/components/AppPieChart';

export default function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4 p-4'>
      <div className='bg-card rounded-lg p-4'>
        <AppPieChart />
      </div>
      <div className='bg-card rounded-lg p-4 lg:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-card rounded-lg p-4'>Test</div>
      <div className='bg-card rounded-lg p-4 lg:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-card rounded-lg p-4'>Test</div>
      <div className='bg-card rounded-lg p-4'>Test</div>
    </div>
  )
};