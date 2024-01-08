import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const ListItem = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getData(id);
  console.log(data);
  return (
    <div className="min-h-[90vh]">
      <div key={data.id} className="flex justify-between gap-20 items-center">
        <Image
          width={500}
          height={500}
          src="https://images.pexels.com/photos/1268099/pexels-photo-1268099.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="post-image"
        />
        <div>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
