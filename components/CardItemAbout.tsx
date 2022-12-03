interface itemInterface {
    title?:string,
    desc?:string,
    link?:string,
    href:string
}

const CardItemAbout = ({title, desc, link, href}: itemInterface) => {
    return (
      <div className="flex flex-col space-y-[62px]">
        <section className="flex flex-col space-y-6">
          <h1 className="w-[410px] bg-gradient-to-r from-[#07003F] to-[#5461E4] bg-clip-text text-5xl font-extrabold text-transparent">
            {title}
          </h1>
          <p className="w-[486px] text-xl font-medium text-[#FBFBFC]">{desc}</p>
        </section>
        <a href={href} className="text-2xl text-[#FBFBFC]	font-semibold ">{link}</a>
      </div>
    )
}
export default CardItemAbout