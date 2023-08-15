"use client";

import Menu from "@/components/Menu";
import React from "react";

import blogData from "../database/blogData.json";
import Link from "next/link";

const page = () => {
  let AllData = blogData.posts;
  console.log(blogData);

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pb-7">
        <Menu />
      </div>

      <h1 className="text-left font-bold">Blog</h1>

      <div className="">
        {AllData.map((item, index) => {
          return (
            <div className="font-bold" key={item.id}>
              {index + 1} . <Link href={`post/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
