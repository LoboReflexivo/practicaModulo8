import React from "react";
import Link from "next/link";

export default function contacPage() {
  return (
    <div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <h1>Contac Page</h1>
      <h2>My name:</h2>
      <p>Darío</p>
      <h2>My surname:</h2>
      <p>Guerra García</p>
      <h2>My city:</h2>
      <p>Málaga</p>
    </div>
  );
}
