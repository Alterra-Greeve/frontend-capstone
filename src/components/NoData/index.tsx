import NoDataImage from '@/assets/images/no-data-challenges.png'

export default function NoData() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-[80dvh]">
      <img src={NoDataImage} alt="No Data Challenges" />
      <h1 className="font-bold text-2xl">
        Belum ada data yang dimasukkan
      </h1>
    </div>
  )
}