"use client";

import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";

async function getData() {
  const initialData = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return initialData;
}

export const revalidate = 3600;

export default function Blog() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
  });
  return (
    <div className="w-[80%] mx-auto my-8">
      <div className="text-xl"> List Blog</div>
      <hr />
      {isLoading && <div className="text-lg">Loading...</div>}
      {!isLoading && (
        <div style={{ width: "80%", margin: "auto" }}>
          {data?.data.map(
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
                  href={`/blog/${item.id}`}
                  key={index}
                >
                  {item.id} -{item.title}
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
