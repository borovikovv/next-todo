'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({disabled}: {disabled: boolean}) {
  const { pending } = useFormStatus()
 
  return (
    <button className='btnPrimary' type="submit" disabled={pending || disabled}>
      {pending ? "Adding..." : "Add"}
    </button>
  )
}