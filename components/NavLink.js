import { useRouter } from 'next/router'
import Link from 'next/link'

const cn = 'px-5 py-4 text-sm hover:text-white transition uppercase font-lato'

const ActiveLink = ({
  children,
  className,
  activeClassName = 'text-primary pointer-events-none',
  ...props
}) => {
  const { asPath } = useRouter()

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const fullClassName =
    asPath === props.href || asPath === props.as
      ? `${cn} ${className} ${activeClassName}`.trim()
      : `${cn} text-light ${className}`

  return (
    <Link {...props}>
      <a className={fullClassName}>{children}</a>
    </Link>
  )
}

export default ActiveLink
