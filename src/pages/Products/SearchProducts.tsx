import Filter from '@/assets/icons/Filter.svg'
import FilterOutline from '@/assets/icons/FilterOutline.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatEarth from '@/assets/icons/catEarth.svg'
import CatBrains from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import SearchBar from '@/components/SearchBar/SearchBar'
import { useState } from 'react'

export default function SearchProducts() {
  const [isOpen, setIsOpen] = useState(false)
  function handleInput(){

  }
  return (
    <div className='flex gap-[4px]'>
      <SearchBar />
      <div className='w-[40px] h-[40px] relative z-10'>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
          {isOpen? <Filter/> : <FilterOutline />}
        </div>
        {isOpen?
        <div className='absolute p-[12px] rounded-[8px] bg-neutral-50 shadow-custom'>
          <div className='flex flex-col gap-[4px] mb-[20px] text-[16px] font-[800] text-neutral-900'>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Harga</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="harga" name="harga" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="harga" name="harga" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Stok</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Stok" name="Stok" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Stok" name="Stok" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Koin</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Koin" name="Koin" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Koin" name="Koin" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Membantu</label>
              <div className='flex flex-col gap-[12px]'>
                <div className='flex gap-[20px]'>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatMoney/>
                    </div>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatEarth/>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatBrains/>
                    </div>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatRecycle/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant='primary' children='Simpan' className='w-[228px] py-[8px]'/>
        </div>
        : <></>
        }
      </div>
    </div>
  )
}