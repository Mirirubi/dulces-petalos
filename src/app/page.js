import Link from "next/link";
import Image from "next/image";

const wait = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default async function Home() {
  console.log("hola");
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  const data = await response.json();
  console.log(data[0].id);
  await wait();
  return (
    <>
      <div className="border-2 border-firefly">
        <h1>List View</h1>
        <div className="border-2 border-tradewind p-8">Search...</div>
        <div className="product border-2 border-paradiso grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product) => {
            return (
              <Link href={`/product/${product.id}`}>
                <div className="flex flex-col rounded-2xl bg-harp items-center p-2 m-2">
                  <div className="font-bold py-2">{product.name}</div>
                  <Image
                    src={product.imgUrl}
                    alt={`Imagen de ${product.name}`}
                    unoptimized
                    width={240}
                    height={240}
                    objectPosition="center"
                  ></Image>
                  <div className="py-2">{product.price} €</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
