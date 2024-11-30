'use client'

import { Button } from '@/components/ui/button'
import { Category } from '@prisma/client'
import {ColumnDef} from '@tanstack/react-table'
import { Edit } from 'lucide-react'
import Link from 'next/link'
import FormDelete from './_components/form-delete'

export const columns : ColumnDef<Category>[] = [
    {
        accessorKey: 'name',
        header: 'Category Name'
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const category = row.original

            return (
                <div className='space-x-4 inline-flex'>
                    <Button size='sm'>
                        <Link href={`/dashboard/categories/edit/${category.id}`}>
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