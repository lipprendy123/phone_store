'use client'
import { Button } from '@/components/ui/button'
import { Locations } from '@prisma/client'
import {ColumnDef} from '@tanstack/react-table'
import { Edit, Trash } from 'lucide-react'
import Link from 'next/link'
import FormDelete from './_components/form-delete'

export const columns : ColumnDef<Locations>[] = [
    {
        accessorKey: 'name',
        header: 'Locations'
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const category = row.original

            return (
                <div className='space-x-4 inline-flex'>
                    <Button size='sm'>
                        <Link href={`/dashboard/locations/edit/${category.id}`}>
                        <div className="flex">
                        <Edit className='w-4 h-4 mr-2' />  Edit
                        </div>
                        </Link>
                    </Button>
                    <FormDelete id={category.id}/>
                </div>
            )
        }
    }

]