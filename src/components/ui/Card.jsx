import React from 'react'
import { cn } from '../../lib/utils'

const Card = React.forwardRef(function Card({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn('rounded border p-4 bg-white shadow', className)}
      {...props}
    >
      {children}
    </div>
  )
})

export default Card
