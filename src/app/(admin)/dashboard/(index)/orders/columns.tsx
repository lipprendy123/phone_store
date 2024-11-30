'use client'

import { Badge } from "@/components/ui/badge"
import { rupiahFormat } from "@/lib/utils"
import { StatusOrder } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

type Tproduct =  {
    name: string
    image: string
}

export type TColumn = {
    id: number
    products: Tproduct[]
    customer_name: string
    price: number
    status: StatusOrder
}

export const columns: ColumnDef<TColumn>[] = [
    {
        accessorKey: 'products',
        header: 'Products',
        cell: ({row}) => {
            const order = row.original

            return (
                <div className="flex flex-col gap-4 justify-start">
                    {order.products.map((item, i) => (
                        <div key={`${item.name + i}`} className="inline-flex items-center gap-5">
                            <Image
						src={item.image}
						alt="Product"
						width={80}
						height={80}
					/>
					<span>{item.name}</span>
                        </div>
                    ))}
                </div>
            )
        }
    },
    {
        accessorKey: 'customer_name',
        header: 'Customer name'
    },
    {
        accessorKey: 'price',
        header: 'Total price',

        cell: ({row}) => rupiahFormat(row.original.price)
    },
    {
        'accessorKey': 'status',
        'header': 'Status order',

        cell: ({row}) => {
            return (
                <Badge variant={row.original.status === 'failed' ? 'destructive' : 'default'}>
                    {row.original.status}
                </Badge>
            )
        }
    }
]