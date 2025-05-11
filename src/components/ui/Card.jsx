import React, { forwardRef } from 'react'
import { cn } from '../../helpers/utils'

const Card = forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ ref }
      className={ cn('rounded-lg bg-white text-gray-900', className) }
      { ...props }
    />
  );
});

const CardHeader = forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div
      ref={ ref }
      className={ cn('flex flex-col space-y-1.5', className) }
      { ...props }
    />
  );
});

const CardTitle = forwardRef(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ ref }
      className={ cn('text-2xl font-semibold leading-none tracking-tight', className) }
      { ...props }
    />
  );
});

const CardDescription = forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ ref }
      className={ cn('text-sm text-gray-500', className) }
      { ...props }
    />
  );
});

const CardContent = forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div
      ref={ ref }
      className={ cn('text-sm font-mono text-gray-600', className) }
      { ...props }
    />
  );
});

const CardFooter = forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div
      ref={ ref }
      className={ cn('flex items-center', className) }
      { ...props }
    />
  );
});

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
