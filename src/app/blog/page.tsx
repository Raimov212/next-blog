import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

// interface DataFetchingType {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface DataType {
//   data: DataFetchingType[];
// }

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="min-h-full flex flex-col gap-10">
      {data.slice(1, 10).map((item: any) => (
        <Link href={`/blog/${item.id}`} key={item.id}>
          <div className="flex justify-between gap-20 items-center">
            <Image
              width={500}
              height={500}
              src="https://images.pexels.com/photos/1268099/pexels-photo-1268099.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="post-image"
            />
            <div>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
