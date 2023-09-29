'use client'
import { usePathname } from 'next/navigation'

const defaultMeta = {
  title: 'Petrolida 2024',
  siteName: 'Petrolida 2024',
  description:
    'Petrolida 2024 aims to serve as a platform for university students to explore and disclose their innovation regarding today’s energy challenges through providing them a change to achieve their excellence.',
  url: 's',
  type: 'website',
  robots: 'follow, index',
  image: '',
  keywords: 'oil, petroleum, petrolida, petrol',
}

interface IDefaultHeadProps extends Partial<typeof defaultMeta> {
  date?: string
  templateTitle?: string
}

interface IFavicons {
  rel: string
  href: string
  sizes?: string
  type?: string
}

const favicons: Array<IFavicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
]

export default function DefaultHead(props: IDefaultHeadProps) {
  const pathname = usePathname()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${pathname}`} />
      <link rel="canonical" href={`${meta.url}${pathname}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TEDxITS" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Petrolida 2023"
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
    </>
  )
}
