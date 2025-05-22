import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react'
import { CiCirclePlus } from "react-icons/ci";
import { Product } from '@/types/product';

function Cards({ data, prop }: { data: Product[], prop: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const filteredData = prop === "recommended"
    ? data.filter((item: Product) => item.recommended)
    : data.filter((item: Product) => item.type === prop);

  return (
    <div className="flex items-center mt-4">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="w-8 h-8 mb-24 bg-white shadow rounded-full"
        >
          ◀
        </button>

        <div className="flex w-full px-4 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {filteredData.map((item: Product) => (
              <div className="flex-[0_0_25%]" key={item.id}>
                <div className="flex flex-col items-center justify-evenly h-80">
                  <Link href={`/product/${item.id}`}>
                    <div className="flex justify-center border border-gray-200 rounded-lg relative">
                      <Image src={item.image} alt={item.description} width="184" height="184" />
                    </div>
                  </Link>
                  <CiCirclePlus className="absolute bottom-30 right-5 text-5xl" />
                  <div className="w-4/5 flex flex-col">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm font-light">
                      {item.description.length > 40
                        ? item.description.slice(0, 40) + '...'
                        : item.description}
                    </p>
                    <div className="flex gap-8">
                      <p className="text-red-600">
                        R${(Math.round(item.price * 100) / 100).toFixed(2)}
                      </p>
                      <p className="text-gray-600 line-through">
                        R${(Math.round(item.old_price * 100) / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="w-8 h-8 mb-24 bg-white shadow rounded-full"
        >
          ▶
        </button>
      </div>
    </div>

  )
}

export default Cards;