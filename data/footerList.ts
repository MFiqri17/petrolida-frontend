export interface footerlistInterface {
  id:number,
  title:string,
  content: {
    lable: string,
    href: string
  }[]
}

const footerListData = [
  {
    id: 1,
    title: 'Product',
    content: [
      {
        id: 1,
        lable: 'About us',
        href: '',
      },

      {
        id: 2,
        lable: 'Event',
        href: '',
      },
      {
        id: 3,
        lable: 'Competitions',
        href: '',
      },
      {
        id: 4,
        lable: 'Non Competitions',
        href: '',
      },
      {
        id: 5,
        lable: 'FAQ',
        href: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Competitions',
    content: [
      {
        id: 1,
        lable: 'Oil Rig Desain',
        href: '',
      },
      {
        id: 1,
        lable: 'Fracturing Fluid Desain',
        href: '',
      },
      {
        id: 3,
        lable: 'Petrosmart',
        href: '',
      },
      {
        id: 4,
        lable: 'Paper',
        href: '',
      },
      {
        id: 5,
        lable: 'Business Case',
        href: '',
      },
      {
        id: 6,
        lable: 'Case Study',
        href: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Non Competitions',
    content: [
      {
        id: 1,
        lable: 'CV 101',
        href: '',
      },
      {
        id: 2,
        lable: 'Interview 101',
        href: '',
      },
      {
        id: 3,
        lable: 'Career Paths',
        href: '',
      },
    ],
  },
]

export default footerListData
