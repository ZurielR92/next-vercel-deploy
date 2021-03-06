import Link from 'next/link'
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (


    <MainLayout>
        <h1>Pagina Home</h1>
        <h1 className={'title'}>
          Ir a <Link href="/about"><a>About</a></Link>
        </h1>

        <p className={'description'}>
          Get started by editing{" "}
          <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>

  );
}
