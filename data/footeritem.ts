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
      { label: 'Mail Us: petrolida2023@gmail.com', href: '' },
      { label: 'Call Us: 6281296588582 (Renaldi)', href: '' },
    ],
  },
  {
    id: 2,
    title: 'Visit Us',
    text: [
      {
        label:
          'Institut Teknologi Sepuluh Nopember \n Jl. Teknik Kimia Keputih, Sukolilo \n Surabaya Jawa Timur 60111',
        href: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Media',
    text: [
      { label: 'Sponsor: sponsorshipetrolida@gmail.com', href: '' },
      { label: 'Media partner: prpetrolida2023@gmail.com', href: '' },
    ],
  },
]
export default footeritem
