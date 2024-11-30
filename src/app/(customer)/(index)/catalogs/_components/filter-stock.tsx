import React from 'react'
import FilterCheckboxItem from './filter-checkBox-item'

export default function FilterStock() {
  return (
    <div className="flex flex-col gap-[14px]">
    <p className="font-semibold leading-[22px] text-gray-800">Stocks</p>
    {/* <label className="font-semibold flex items-center gap-3">
        <input
          type="checkbox"
          name="stock"
          className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        />
        <span className='text-gray-500'>Pre Order</span>
    </label>
    <label className="font-semibold flex items-center gap-3">
        <input
          type="checkbox"
          name="stock"
          className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        />
        <span className='text-gray-500'>Ready Stock</span>
    </label> */}
    <FilterCheckboxItem type='stock' id={'ready'} value='Ready' />
    <FilterCheckboxItem type='stock' id={'preorder'} value='Pre-order' />
</div>
  )
}
