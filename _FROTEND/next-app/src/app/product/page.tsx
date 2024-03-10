import Link from "next/link";

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("failed fetch data");
  }
  return res.json();
}

export default async function Product() {
  const data = await getData();
  return (
    <div>
      <h1>Product</h1>
      <div style={{ width: "80%", margin: "auto" }}>
        {data.map(
          (
            item: { id: number; title: string; body: string },
            index: number
          ) => {
            return (
              <Link
                style={{
                  textDecoration: "none",
                  display: "block",
                  margin: "10px 0",
                }}
                href={`/product/${item.id}`}
                key={index}
              >
                {item.id} -{item.title}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
