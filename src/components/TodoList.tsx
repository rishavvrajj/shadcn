'use client'

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { format } from 'date-fns'



export default function TodoList() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Title */}
      <h1 className='text-lg font-medium mb-4'>Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button className={'w-full mb-4 p-2'}>
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          }
        />
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={date => {
              setDate(date);
              setOpen(false)
            }}
            className='w-full'
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className={"h-100 w-full"}>
        <div className={'flex flex-col gap-4 m-1'}>

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