import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react'
import { Product } from '@/types/product';
import Footer from '@/components/Footer/footer';

function Cards({ data }: { data: Product[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="flex justify-center items-center overflow-hidden mt-10" ref={emblaRef}>
      <div className="flex">
        {data.map((item: Product) => (
          <div key={item.id}>
            {item.recommended && (
              <div className="flex-[0_0_25%]">
                <div className="flex flex-col items-center justify-evenly h-80">
                  <Link href={`/product/${item.id}`}>
                    <div className="flex justify-center border border-gray-200 rounded-lg mx-4">
                      <Image src={item.image} alt={item.description} width="184" height="184" />
                    </div>
                  </Link>
                  <div className="w-4/5 flex flex-col">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm font-light">{item.description.length > 40 ? item.description.slice(0, 40) + '...' : item.description}</p>
                    <div className="flex gap-8">
                      <p className="text-red-600">R${(Math.round(item.price * 100) / 100).toFixed(2)}</p>
                      <p className="text-gray-600 line-through">R${(Math.round(item.old_price * 100) / 100).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-3/15 top-9/15 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3/15 top-9/15 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  )
}

export default Cards;