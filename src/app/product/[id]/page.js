"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Details({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dulces-petalos.herokuapp.com/api/product/${params.id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return (
    <>
      {data ? (
        <div className="container mx-auto px-4 p-8">
          <div>{data.name}</div>
          <div className="product w-60 h-60">
            <Image
              src={data.imgUrl}
              alt={`Imagen de ${data.name}`}
              unoptimized
              width={240}
              height={240}
              style={{
                objectFit: "fill",
              }}
            ></Image>
          </div>
          <div>{data.binomialName}</div>
          <div>{data.price} €</div>
          <div>{data.wateringsPerWeek} a la semana</div>
          <div>{data.fertilizerType}</div>
          <div>{data.heightInCm} cm</div>
        </div>
      ) : (
        <p>Cargando. . .</p>
      )}
    </>
  );
}
