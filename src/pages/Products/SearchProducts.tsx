
import Filter from '@/assets/icons/Filter.svg'
import SearchBar from '@/components/SearchBar/SearchBar'
export default function SearchProducts() {
    return(
        <div className='flex gap-[4px]'>
            <SearchBar/>
            <div className='w-[40px] h-[40px]'>{<Filter/>}</div>
        </div>
    )
};
