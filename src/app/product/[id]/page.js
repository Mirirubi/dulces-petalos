"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const fertilizerAdapter = { phosphorus: "fosforado", nitrogen: "nitrogenado" };
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
        <div div className="product mb-32 max-w-3xl mx-auto">
          <div className="px-8 flex justify-end">
            <Link href={`/`}>
              <div className="button rounded-full bg-harp text-center max-w-min px-6 p-1">
                Back
              </div>
            </Link>
          </div>
          <div className="mx-auto px-4 p-8 grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src={data.imgUrl}
                alt={`Imagen de ${data.name}`}
                unoptimized
                width={350}
                height={350}
                objectPosition="center"
              ></Image>
            </div>
            <div className="mx-auto flex flex-col justify-center p-8 w-90">
              <div className="text-2xl font-bold">{data.name}</div>
              <div className="text-sm">{data.binomialName}</div>
              <ul className="list-inside my-8 ml-4">
                <li>Regar {data.wateringsPerWeek} veces a la semana</li>
                <li>
                  Fertilizante recomendado:{" "}
                  {fertilizerAdapter[data.fertilizerType]}
                </li>
                <li>Hasta {data.heightInCm} cm de alto</li>
              </ul>
              <div className="text-2xl font-medium flex justify-end">
                {data.price} €
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando. . .</p>
      )}
    </>
  );
}
