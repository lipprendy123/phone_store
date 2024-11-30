import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { columns } from './column'
import { getCategories } from './lib/data'

export default async function CategoriesPage() {
	const data = await getCategories()



  return (
    <div className="space-y-4">
			<div className="text-right">
				<Button size="sm" className="h-8 gap-1" asChild>
					<Link href="/dashboard/categories/create">
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Category
						</span>
					</Link>
				</Button>
			</div>
			<Card >
				<CardHeader>
					<CardTitle>Categories</CardTitle>
					<CardDescription>
						Manage your categories and view their sales performance.
					</CardDescription>
				</CardHeader>
				<CardContent>
                 <DataTable columns={columns} data={data} />
				</CardContent>
			</Card>
		</div>
  )
}
