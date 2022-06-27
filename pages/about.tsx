import React from "react";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function about() {
  return (

    <>
        <h1>Pagina About</h1>
        <h1 className={'title'}>
          Ir a <Link href="/"><a>Home</a></Link>
        </h1>

        <p className={'description'}>
          Get started by editing{" "}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>



  );
}


about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}