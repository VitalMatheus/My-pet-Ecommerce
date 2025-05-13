import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Carousel from "@/components/Carousel/carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
}
