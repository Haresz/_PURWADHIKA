"use client";

import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";

import { getImage } from "@/api/blog";
import { useQuery } from "react-query";

interface IMyCard {
  id: string;
  title: string;
  image: string;
  slug: string;
}

export default function MyCard(props: IMyCard) {
  const { id, title, image, slug } = props;

  const { data, error, isLoading } = useQuery("postImage", async () => {
    const res = await getImage(image);
    return res;
  });

  if (isLoading) <div> image load ... </div>;
  if (error) <div> {JSON.stringify(error)} </div>;

  return (
    <Card align="center" my={5}>
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody>
        <div>image : {image}</div>
        <img
          src={"http:" + data?.data?.fields?.file.url}
          alt="Image"
          height={200}
          width={"100%"}
        />
      </CardBody>
      <CardFooter>
        <Link href={`/blog/detail/${id}`}>
          <Button colorScheme="blue">View here</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
