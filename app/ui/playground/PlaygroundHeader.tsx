"use client"
import React from "react";
import { usePathname } from "next/navigation";

export default function PlaygroundHeader() {
  const pathname = usePathname()
  const lastPathname = pathname.split('/').pop();
  const subName = lastPathname?.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');

  return (
    <>
      <h1>Play Ground{subName === 'playground' ? '' : ` - ${subName}`}</h1>
      <hr className="my-4" />
    </>
  );
}
