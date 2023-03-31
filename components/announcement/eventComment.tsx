const EventComment = ({
  id,
  content,
  link,
  file,
}: {
  id: number
  content: string
  link: string
  file: string
}) => {
  return (
    <div key={id} className=" flex flex-col justify-between space-x-6">
      <section className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 h-full py-5 ">
        <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
          Announcement
        </h5>
        <p className="text-lg font-semibold text-[#1E1E2D]">{content}</p>
        <div>
          <p>
            {' '}
            File:
            <a
              className="ml-1 inline hover:border-b-2 hover:border-black"
              rel="noreferrer"
              target="_blank"
              href={link}
            >
              {file}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default EventComment
