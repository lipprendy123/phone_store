'use client'

import { Button } from '@/components/ui/button'
import { ActionResult } from '@/types'
import { Trash } from 'lucide-react'
import React, { useActionState } from 'react'
import { deleteCategory } from '../lib/actions'
import { useFormStatus } from 'react-dom'

const initialState: ActionResult = {
    error: ''
}

interface FormDeleteProps {
    id : number
}

export function SubmitButton() {
    const {pending} = useFormStatus()
    return (
        <Button type="submit" size="sm" variant="destructive" disabled={pending}>
            <Trash className="w-4 h-4 mr-2" />
            {pending ? "Loading..." : "Delete"}
        </Button>
    ); // Pastikan tanda kurung tutup di sini ada
}

export default function FormDelete({id}: FormDeleteProps) {
    const deleteCategoryWithId = ( _: unknown,
        formData : FormData,) => deleteCategory(_, formData, id)

        const [state, formAction] = useActionState(deleteCategoryWithId, initialState)
  return (
    <form action={formAction}>
        <SubmitButton/>
    </form>
      )
}
