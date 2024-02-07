export default async function Details({ params }) {
  console.log(params);
  const response = await fetch(
    `https://dulces-petalos.herokuapp.com/api/product/${params.id}`
  );
  const data = await response.json();
  console.log(data);

  return (
    <>
      <div className="container mx-auto px-4 p-8">
        <div>{data.name}</div>
        <div>{data.binomialName}</div>
        <div>{data.price} €</div>
        <div>{data.wateringsPerWeek} a la semana</div>
        <div>{data.fertilizerType}</div>
        <div>{data.heightInCm} cm</div>
      </div>
    </>
  );
}
