import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Carousel from "@/components/Carousel/carousel";
import RecommendedProducts from "@/components/Recommended-products/recommended-products";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Navbar />
        <Carousel />
      </div>
      <RecommendedProducts />
      <Footer />
    </div>
  );
}
