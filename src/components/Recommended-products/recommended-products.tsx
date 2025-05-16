"use client";
import Cards from "../Cards/cards";


function RecommendedProducts() {
  return (
    <div className="w-6xl py-4 m-auto">
      <div className="flex">
        <div className="flex flex-col w-5/6 m-auto py-20">
          <h1 className="text-xl font-semibold">Recommended Products</h1>
          <Cards prop={"recommended"} />
        </div>
      </div>
    </div>
  )
}

export default RecommendedProducts;