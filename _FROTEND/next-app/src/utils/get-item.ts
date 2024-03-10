import { cache } from "react";

export const revalidate = 3000;

export const getItem = cache(async (id: number) => {
  const item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const res = await item.json();

  return res;
});
