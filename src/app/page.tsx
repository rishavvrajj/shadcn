import React from 'react'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function page({
  disabled,
  isRounded,
} : {
  disabled: boolean;
  isRounded: boolean;
}) {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <Button className="cursor-pointer"> 
          <CirclePlus /> 
          <span className={cn('text-sm', disabled ? "text-red" : "text-blue", isRounded && "rounded-full", "p-4")}>Click Me</span>
        </Button>
    </div>
  )
}

