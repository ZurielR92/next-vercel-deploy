import MainLayout from "../../components/layouts/MainLayout"
import Link from "next/link"


export default function pricing() {
  return (
    <>
        <h1>Pagina Pricing</h1>
        <h1 className={'title'}>
          Ir a <Link href="/"><a>Home</a></Link>
        </h1>

        <p className={'description'}>
          Get started by editing{" "}
          <code className={'code'}>pages/pricing/index.jsx</code>
        </p>
    </>
  )
}


pricing.getLayout = function getLayout(page: JSX.Element){
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}