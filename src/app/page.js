"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [displayedData, setDisplayedData] = useState(null);
  const [inputValue, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dulces-petalos.herokuapp.com/api/product"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setApiData(result);
      setDisplayedData(result);
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  const filtrarData = (data, searchString) => {
    return data.filter(function (item) {
      const prop1 = item.name.toLowerCase();
      const prop2 = item.binomialName.toLowerCase();
      const search = searchString.toLowerCase();

      return prop1.includes(search) || prop2.includes(search);
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    let searchTerm = event.target.value;

    setDisplayedData(filtrarData(apiData, searchTerm));

    const inputValue = event.target.value;

    setValue(inputValue);
  };

  return (
    <>
      <div className="border-2 border-firefly p-2">
        <div className="border-2 border-tradewind p-8">
          <div className="border-2 rounded-2xl border-harp flex flex-row items-center gap-5 p-1">
            <svg class="w-8 h-8 m-2 mx-4" fill="none" viewBox="0 0 20 20">
              <path
                stroke="#deede1"
                stroke-width="10%"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <input
              type="text"
              id="inputId"
              placeholder="Buscar..."
              value={inputValue ?? ""}
              onChange={handleChange}
              className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
            />
          </div>
        </div>

        {displayedData ? (
          <div className="product-list border-2 border-paradiso grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedData.map((product) => {
              return (
                <Link href={`/product/${product.id}`}>
                  <div className="flex flex-col rounded-2xl bg-harp items-center p-2 m-2">
                    <div className="text-lg font-bold py-2">{product.name}</div>
                    <Image
                      src={product.imgUrl}
                      alt={`Imagen de ${product.name}`}
                      unoptimized
                      width={240}
                      height={240}
                      objectPosition="center"
                    ></Image>
                    <div className="py-2 flex flex-col text-center">
                      <div className="text-sm">{product.binomialName}</div>
                      <div className="text-lg font-semibold">
                        {product.price} €
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p>Cargando. . .</p>
        )}
      </div>
    </>
  );
}
