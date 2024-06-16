import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CatEarth from '@/assets/icons/catEarth.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatBrain from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import { DataImpactProps } from "../type";

const headers = [
  "No",
  "Username",
  "Tantangan",
  "Tingkat Kesulitan",
  "Helps",
  "EXP",
  "Point Impact"
]



interface TableImpactChallengeProps {
  data: DataImpactProps[];
  dataShow: {
    start: number;
    end: number;
  }
}

export default function TableImpactChallenge({ data, dataShow }: TableImpactChallengeProps) {
  const displayedData = data.slice(dataShow.start - 1, dataShow.end);

  return (
    <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="text-sm leading-5 text-black font-normal px-3 py-2 whitespace-nowrap">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedData.map((item, index) => (
            <TableRow className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-200'} key={index}>
              <TableCell className="text-start">{index + 1}</TableCell>
              <TableCell className="text-start">{item.username}</TableCell>
              <TableCell className="text-start">{item.challenge_name}</TableCell>
              <TableCell className="text-start">Tingkat Kesulitan</TableCell>
              <TableCell className="text-start">
                <div className="flex gap-[4px]">
                  {item.helps?.map((cat) =>
                    <>
                      {cat.impact_category.name === 'Mengurangi Pemanasan Global' ? <CatEarth /> : null}
                      {cat.impact_category.name === 'Hemat Uang' ? <CatMoney /> : null}
                      {cat.impact_category.name === 'Perluas Wawasan' ? <CatBrain /> : null}
                      {cat.impact_category.name === 'Mengurangi Limbah' ? <CatRecycle /> : null}
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-start">EXP</TableCell>
              <TableCell className="text-start">{item.impact_point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}