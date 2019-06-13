import Link from 'next/link';

export default ({href, as, children, ...others}) => (
  <Link href={href} as={as}>
    <a {...others}>{children}</a>
  </Link>
)
