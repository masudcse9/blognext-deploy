"use client";
import React from "react";
import blogData from "../../database/blogData.json";
import Menu from "@/components/Menu";
import Link from "next/link";

const page = ({ params }) => {
  const id = params.id;
  let AllData = blogData.posts;

  const item = AllData.find((item) => item.id == id);
  

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pb-7">
        <Menu />
      </div>

      <h1 className="text-left font-bold">{item.title}</h1>
      <div className="pt-3">{item.content}</div>
      <div className="pt-3">Date : {item.date}</div>
    </main>
  );
};

export default page;
