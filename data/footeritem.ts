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
      { id: 1, label: 'Mail Us: petrolida2023@gmail.com', href: '' },
      { id: 2, label: 'Call Us: 6281296588582 (Renaldi)', href: '' },
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
        href: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Media',
    text: [
      { id: 1, label: 'Sponsor: sponsorshipetrolida@gmail.com', href: '' },
      { id: 2, label: 'Media partner: prpetrolida2023@gmail.com', href: '' },
    ],
  },
]
export default footeritem
