import { getItem } from "@/utils/get-item";

interface IParams {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: any) {
  const id = params.id;
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`);
  const response = await post.json();
  return {
    title: response.title,
    description: response.body,
  };
}

export default async function ProductDetail(props: IParams) {
  const item = await getItem(props.params.id);
  return (
    <div className="w-[80%] mx-auto my-8">
      <h1 className="text-2xl">
        {item.id}. {item.title}
      </h1>
      <hr />
      <div className="py-8 my-8">{item.body}</div>
    </div>
  );
}
