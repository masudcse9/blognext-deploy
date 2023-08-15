import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div>
     
      <code className="font-mono font-bold">
        <Link href={"/"}>Home</Link>
      </code>
      &nbsp;
      &nbsp;
      <code className="font-mono font-bold">
        <Link href={"/blog"}>Blog</Link>
      </code>
    </div>
  );
};

export default Menu;
