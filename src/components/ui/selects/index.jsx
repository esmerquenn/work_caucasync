'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Check, ChevronDown  } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'

const locales = [
  { label: 'AZ', value: 'az' },
  { label: 'EN', value: 'en' },
  { label: 'RU', value: 'ru' },
  { label: 'TR', value: 'tr' },
]

export function LanguageSwitcher() {
  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(currentLocale)

  const handleLangChange = (lang) => {
    const newPath = pathname.replace(currentLocale, lang)
    setValue(lang)
    setOpen(false)
    router.replace(newPath)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-[60px] flex justify-between items-center  px-2 py-1 rounded text-[13px]">
        {value.toUpperCase()}
        <ChevronDown  className="ml-1 h-3 w-3 opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="w-[60px] p-0">
        <Command>
          <CommandGroup>
            {locales.map((locale) => (
              <CommandItem
                key={locale.value}
                value={locale.value}
                onSelect={() => handleLangChange(locale.value)}
                className="text-[13px]"
              >
                {locale.label}
                {value === locale.value && (
                  <Check className="ml-auto h-3 w-3" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
