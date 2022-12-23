export interface footeritemInterface {
  id: number
  title: string
  text: {
    label: string
    href: string
  }[]
}

const footeritem = [
  {
    id: 1,
    title: 'Contact',
    text: [
      {
        id: 1,
        label: 'Mail Us: petrolida2023@gmail.com',
        href: 'mailto:petrolida2023@gmail.com',
      },
      {
        id: 2,
        label: 'Call Us: 6281296588582 (Renaldi)',
        href: 'https://wa.me/6281296588582',
      },
    ],
  },
  {
    id: 2,
    title: 'Visit Us',
    text: [
      {
        id: 1,
        label:
          'Institut Teknologi Sepuluh Nopember \n Jl. Teknik Kimia Keputih, Sukolilo \n Surabaya Jawa Timur 60111',
        href: 'https://goo.gl/maps/cfPZv3FGCs44Bf6FA',
      },
    ],
  },
  {
    id: 3,
    title: 'Media',
    text: [
      {
        id: 1,
        label: 'Sponsor: sponsorshipetrolida@gmail.com',
        href: 'mailto:sponsorshipetrolida@gmail.com',
      },
      {
        id: 2,
        label: 'Media partner: prpetrolida2023@gmail.com',
        href: 'mailto:prpetrolida2023@gmail.com',
      },
    ],
  },
]
export default footeritem
