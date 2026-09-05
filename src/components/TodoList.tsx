'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

const events = [
  {
    id: 'event1',
    title: 'Live at Madison Square Garden',
    date: 'Sep 08',
    time: '8:00 PM',
  },
  {
    id: 'event2',
    title: 'Midnight Drive — Single Release',
    date: 'Sep 12',
    time: '12:00 AM',
  },
  {
    id: 'event3',
    title: 'Spotify Live Session',
    date: 'Sep 18',
    time: '7:30 PM',
  },
  {
    id: 'event4',
    title: 'Summer Music Festival',
    date: 'Sep 24',
    time: '6:00 PM',
  },
  {
    id: 'event5',
    title: 'After Hours — Album Release',
    date: 'Oct 02',
    time: '12:00 AM',
  },
  {
    id: 'event6',
    title: 'Acoustic Nights',
    date: 'Oct 08',
    time: '8:00 PM',
  },
  {
    id: 'event7',
    title: 'The Rooftop Sessions',
    date: 'Oct 14',
    time: '7:00 PM',
  },
  {
    id: 'event8',
    title: 'Neon Lights — Single Release',
    date: 'Oct 20',
    time: '12:00 AM',
  },
  {
    id: 'event9',
    title: 'Global Music Awards',
    date: 'Oct 27',
    time: '9:00 PM',
  },
  {
    id: 'event10',
    title: 'Live in Los Angeles',
    date: 'Nov 03',
    time: '8:30 PM',
  },
  {
    id: 'event11',
    title: 'Behind the Music — Interview',
    date: 'Nov 08',
    time: '6:00 PM',
  },
  {
    id: 'event12',
    title: 'Winter Nights Tour',
    date: 'Nov 15',
    time: '8:00 PM',
  },
  {
    id: 'event13',
    title: 'City Lights — Single Release',
    date: 'Nov 21',
    time: '12:00 AM',
  },
  {
    id: 'event14',
    title: 'Spotify Wrapped Live',
    date: 'Nov 28',
    time: '7:30 PM',
  },
  {
    id: 'event15',
    title: 'Holiday Music Special',
    date: 'Dec 05',
    time: '8:00 PM',
  },
  {
    id: 'event16',
    title: 'Live at The Forum',
    date: 'Dec 12',
    time: '9:00 PM',
  },
  {
    id: 'event17',
    title: 'Christmas Eve Session',
    date: 'Dec 24',
    time: '10:00 PM',
  },
  {
    id: 'event18',
    title: 'New Year — Single Release',
    date: 'Dec 31',
    time: '12:00 AM',
  },
  {
    id: 'event19',
    title: 'New Year Live Concert',
    date: 'Jan 01',
    time: '8:00 PM',
  },
  {
    id: 'event20',
    title: 'Acoustic Stories',
    date: 'Jan 08',
    time: '7:00 PM',
  },
  {
    id: 'event21',
    title: 'Midnight Stories — EP Release',
    date: 'Jan 15',
    time: '12:00 AM',
  },
  {
    id: 'event22',
    title: 'Live at The O2',
    date: 'Jan 22',
    time: '8:30 PM',
  },
  {
    id: 'event23',
    title: 'Studio 54 Live Session',
    date: 'Jan 29',
    time: '7:30 PM',
  },
  {
    id: 'event24',
    title: 'Electric Dreams — Single Release',
    date: 'Feb 05',
    time: '12:00 AM',
  },
  {
    id: 'event25',
    title: 'Valentine’s Day Special',
    date: 'Feb 14',
    time: '8:00 PM',
  },
  {
    id: 'event26',
    title: 'Live from Brooklyn',
    date: 'Feb 21',
    time: '9:00 PM',
  },
  {
    id: 'event27',
    title: 'Spring Sound Festival',
    date: 'Mar 07',
    time: '6:30 PM',
  },
  {
    id: 'event28',
    title: 'Golden Hour — Album Release',
    date: 'Mar 14',
    time: '12:00 AM',
  },
  {
    id: 'event29',
    title: 'World Tour — Opening Night',
    date: 'Mar 21',
    time: '8:00 PM',
  },
  {
    id: 'event30',
    title: 'The Final Encore',
    date: 'Mar 28',
    time: '9:00 PM',
  },
];

export default function TodoList() {
  const [date, setDate] = useState<Date>()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col h-80">
      {/* Header */}
      <div className="mb-2 space-y-3">
        <h2 className="text-md font-medium">Event List</h2>
        {/* Date picker */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                className="w-full justify-start font-normal"
              >
                <CalendarIcon className="size-4" />
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            }
          />

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Event list */}
      <ScrollArea className="flex-1 h-70">
        <div className="pr-3">
          {events.map((event, index) => (
            <div key={event.id}>
              <div className="flex items-center gap-3 py-3">
                <Checkbox
                  id={event.id}
                  className="size-4 shrink-0"
                />

                <label
                  htmlFor={event.id}
                  className="flex min-w-0 flex-1 cursor-pointer items-center justify-between gap-4"
                >
                  <span className="min-w-0 truncate text-xs font-medium">
                    {event.title}
                  </span>

                  <span className="flex shrink-0 items-center gap-2 text-xs">
                    <span className="font-medium">{event.date}</span>
                    <span className="text-muted-foreground">
                      {event.time}
                    </span>
                  </span>
                </label>
              </div>

              {index < events.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
