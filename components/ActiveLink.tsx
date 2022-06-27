import { FC } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

const style = {
    fontWeight: 'bold'
}
interface props {
  text: string,
  href: string
}

export const ActiveLink: FC<props> = ({ text, href }) => {

    const { asPath } = useRouter();

  return (
    <Link href={href}>
        <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
