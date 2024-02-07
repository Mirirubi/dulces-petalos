import Link from "next/link";

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
      <div className="border-2 border-mossGreen  p-8">
        <h1>List View</h1>
        <div className="border-2 border-mossGreen  p-8">Search...</div>
        <div className="border-2 border-mossGreen  p-8">
          <ul>
            {data.map((product) => {
              return (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`}>
                    <div>
                      <p>{product.name}</p>
                      <p>{product.price} €</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
