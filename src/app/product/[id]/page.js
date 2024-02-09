"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div div className="border-2 border-tradewind px-60">
          <div className="border-2 border-tradewind p-8 flex justify-end">
            <Link href={`/`}>
              <div className="rounded-full bg-harp text-center max-w-min px-6 p-1">
                Back
              </div>
            </Link>
          </div>
          <div className="container border-2 border-firefly mx-auto px-4 p-8 flex justify-center">
            <div className="product w-120 h-120">
              <Image
                src={data.imgUrl}
                alt={`Imagen de ${data.name}`}
                unoptimized
                width={400}
                height={400}
                style={{
                  objectFit: "fill",
                }}
              ></Image>
            </div>
            <div className="border-2 border-tradewind p-8">
              <div>{data.name}</div>
              <div>{data.binomialName}</div>
              <div>{data.price} €</div>
              <div>{data.wateringsPerWeek} a la semana</div>
              <div>{data.fertilizerType}</div>
              <div>{data.heightInCm} cm</div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando. . .</p>
      )}
    </>
  );
}
