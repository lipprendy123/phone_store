import React from 'react'
import Navbar from '../_components/navbar'
import SearchBar from './_components/search-bar'
import FilterPrice from './_components/filter-price'
import FilterStock from './_components/filter-stock'
import FilterBrand from './_components/filter-brands'
import FilterLocations from './_components/filter-locations'
import FilterCategories from './_components/filter-categories'
import ProductListing from './_components/product-listing'

export default function CatalogsPage() {
  return (
    <>
        <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
            <Navbar/>
    </header>
    <SearchBar/>

    {/* catalogs */}

    <div id="catalog" className="container max-w-[1130px] mx-auto flex gap-[30px] mt-[50px] pb-[100px]">
        <form action="" className="flex flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px]">
            <h2 className="font-bold text-2xl leading-[34px] text-gray-800">Filters</h2>
            <FilterPrice/>
            <hr className="border-[#E5E5E5]" />
            <FilterStock/>      
            <hr className="border-[#E5E5E5]" />
            <FilterBrand/>
            <hr className="border-[#E5E5E5]" />
            <FilterLocations/>
            <hr className="border-[#E5E5E5]" />
            <FilterCategories/>
        </form>
        <div className="w-[780px] flex flex-col bg-white p-[30px] gap-[30px] h-fit border border-[#E5E5E5] rounded-[30px]">
            <h2 className="font-bold text-2xl leading-[34px] text-gray-800">Products</h2>
            <ProductListing/>
        </div>
    </div>

    {/* end catalogs */}

</>
 )
}