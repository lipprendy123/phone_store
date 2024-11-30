import { ColumnDef } from "@tanstack/react-table"

export type Tcolumn = {
    id: number
    name: string
    email: string
    total_transactions: number
}

export const columns: ColumnDef<Tcolumn>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Header'
    },
    {
        accessorKey: 'total_transactions',
        header: 'Total transactions'
    }
]