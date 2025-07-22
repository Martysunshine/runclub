import React from 'react'
import { cn } from '../../lib/utils'

const Button = React.forwardRef(function Button({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700',
        className
      )}
      {...props}
    />
  )
})

export default Button
