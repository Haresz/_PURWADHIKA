import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      Home
      <Link href="/blog">About</Link>
    </div>
  );
}
