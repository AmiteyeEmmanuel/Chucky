import { Mapsicle } from '../../../../../assets'
import { Card, CardContent } from '../../../../ui/card'

function  CustomerMap() {
  return (
    <Card className="flex flex-col h-[45vh]">
    <section className="flex justify-between gap-2 text-black border-b p-6 mb-4">
      <div className="flex flex-col">
        <p className=" font-[800] text-[18px] leading-[24px]"> Customers Map </p>
      </div>
    </section>
    <div className="flex gap-6 flex-wrap transition-all mt-10 w-full mb-10">
      <CardContent className="flex pb-0 w-full">

        <img src={Mapsicle} className='w-full h-[300px]  relative mb-[-56px] bottom-[40px] rounded-md' />
     
      </CardContent>

     
    </div>
  </Card>
  )
}

export default  CustomerMap