"use client";
import { useEffect, useState } from "react";
import Cards from "./cards";


function RecommendedProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (erro) {
        console.log(erro)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-6xl py-4 m-auto">
      <div className="flex">
        <div className="flex flex-col w-5/6 m-auto py-20">
          <h1 className="text-xl font-semibold">Recommended Products</h1>
          <Cards data={data} />
        </div>
      </div>
    </div>
  )
}

export default RecommendedProducts;