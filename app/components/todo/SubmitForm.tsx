"use client";
import { useFormStatus  } from "react-dom";

export function SubmitForm() {
  const { pending } = useFormStatus();
  return (
    <button className="btnPrimary ml-2" disabled={pending} type="submit">{pending ? "Editing..." : "Edit"}</button>
  )
}