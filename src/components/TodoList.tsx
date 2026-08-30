'use client'

import { useState } from 'react'
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
    <div className='h-80'>
      {/* Title */}
      <h1 className='text-lg font-medium mb-4'>Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button className={'w-full mb-4 p-4'}>
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
      <ScrollArea className={"w-full h-60"}>
        <div className={'flex flex-col gap-4 m-1'}>

          <Card className={'p-4'}>
            <div className='flex items-start gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Review August churn report.</label>
            </div>
          </Card>
          <Card className={'p-4'}>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Follow up with three failed payments.</label>
            </div>
          </Card>
          <Card className={'p-4'}>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Publish the PostgreSQL indexing article.</label>
            </div>
          </Card>
          <Card className={'p-4'}>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Invite the customer success team.</label>
            </div>
          </Card>
          <Card className={'p-4'}>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Investigate the mobile conversion drop.</label>
            </div>
          </Card>
          <Card className={'p-4'}>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <label htmlFor='item1' className={'text-xs text-muted-foreground'}>Prepare the September revenue forecast.</label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}