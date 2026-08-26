import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'

export default function TodoList() {
  return (
    <div>
      {/* Title */}
      {/* List */}
      <ScrollArea className={"h-100 w-full"}>
      <div className={'flex flex-col gap-4'}>

        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
        <Card className={'p-4'}>
          <div className='flex items-center gap-4'>
            <Checkbox id='item1' />
            <label htmlFor='item1' className={'text-sm text-muted-foreground'}>lorem lorem lorem lorem lorem lorem lorem lorem lorem.</label>
          </div>
        </Card>
      </div>
      </ScrollArea>
    </div>
  )
}