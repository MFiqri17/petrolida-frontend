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
        href: '/about',
      },

      {
        id: 2,
        lable: 'Event',
        href: '/coming-soon',
      },
      {
        id: 3,
        lable: 'Competitions',
        href: '/coming-soon',
      },
      {
        id: 4,
        lable: 'Non Competitions',
        href: '/coming-soon',
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
        href: '/competition/oil-rig-design',
      },
      {
        id: 1,
        lable: 'Fracturing Fluid Desain',
        href: '/competition/fracturing-fluid-design',
      },
      {
        id: 3,
        lable: 'Petrosmart',
        href: '/competition/petrosmart',
      },
      {
        id: 4,
        lable: 'Paper',
        href: '/competition/paper',
      },
      {
        id: 5,
        lable: 'Business Case',
        href: '/competition/business-case',
      },
      {
        id: 6,
        lable: 'Case Study',
        href: '/competition/case-study',
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
        href: '/coming-soon',
      },
      {
        id: 2,
        lable: 'Interview 101',
        href: '/coming-soon',
      },
      {
        id: 3,
        lable: 'Career Paths',
        href: '/coming-soon',
      },
    ],
  },
]

export default footerListData
