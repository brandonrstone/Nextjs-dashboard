'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useDebouncedCallback } from 'use-debounce'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  console.log('Pathname: ', pathname)
  const { replace } = useRouter()

  // Really easy way to implement a debounce
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    console.log('URLSearchParams: ', params)
    params.set('page', '1');
    // Set a new search parameter 'query' to the value of term
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'> Search</label>
      <input
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        onChange={e => handleSearch(e.target.value)}
        placeholder={placeholder}
        // Ensure the input field is in sync with the URL and will be populated when sharing
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
    </div>
  )
}
