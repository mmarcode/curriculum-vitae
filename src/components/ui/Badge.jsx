import React from 'react'
import { cn } from '../../helpers/utils'

const badgeBaseClasses = 'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap';
const badgeVariants = {
  default: 'border-transparent bg-blue-600 text-white hover:bg-blue-500',
  secondary: 'border-transparent bg-gray-300/30 text-gray-900/80 hover:bg-gray-300/50',
  destructive: 'border-transparent bg-gray-900/80 text-white hover:bg-gray-900',
  outline: 'text-gray-900 border border-gray-300',
};

const Badge = ({ className = '', variant = 'default', ...props }) => {
  return (
    <span
      className={cn(
        badgeBaseClasses,
        badgeVariants[variant] || badgeVariants.default,
        className
      )}
      {...props}
    />
  )
}

export default Badge
