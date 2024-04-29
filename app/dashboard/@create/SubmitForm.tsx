'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className='p-1 bg-slate-600 text-white rounded-md' type="submit" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </button>
  )
}