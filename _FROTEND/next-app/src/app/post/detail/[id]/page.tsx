"use client";
import { useParams } from "next/navigation";

export default function Detail() {
  const params = useParams<{ id: string }>();
  return <div>Detail loh ini {params.id}</div>;
}
