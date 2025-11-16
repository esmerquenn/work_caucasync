'use client'

import React, { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  Command,
  CommandInput,
  CommandItem,
  CommandGroup,
} from '@/components/ui/command'
import { ChevronsUpDown, Check } from 'lucide-react'

const sortOptions = [
  { label: 'Artan', value: 'artan' },
  { label: 'Azalan', value: 'azalan' },
  { label: 'Endirim', value: 'discount' },
  { label: 'Yeni', value: 'yeni' },
]

function ProductSortSelect({ sortBy, setSortBy }) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-[140px] flex items-center justify-between border rounded px-3 py-2 text-sm">
          {sortOptions.find((opt) => opt.value === sortBy)?.label || 'Sort By'}
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-0">
        <Command>
          <CommandGroup>
            {sortOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={() => {
                  setSortBy(option.value)
                  setOpen(false)
                }}
              >
                {option.label}
                {sortBy === option.value && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ProductSortSelect
