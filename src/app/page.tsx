import Navbar from "@/components/Navbar/navbar";
import Carousel from "@/components/Carousel/carousel";
import RecommendedProducts from "@/components/Products/products";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <Navbar />
        <Carousel />
      </div>
      <RecommendedProducts />
    </div>
  );
}
