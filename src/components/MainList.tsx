import mockupArr from '@/@mockup'
import { MediaType } from '@/@types'
import Card from './Card'

type MainListProps = {
  dataList?: MediaType[]
}

export default function MainList({ dataList = mockupArr }: MainListProps) {
  if (!dataList) return <div>Empty</div>

  return (
    <>
      {dataList.map((data) => (
        <Card key={data.id} media={data} />
      ))}
    </>
  )
}
