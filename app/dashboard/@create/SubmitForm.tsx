'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className='btnPrimary' type="submit" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </button>
  )
}