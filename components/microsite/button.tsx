const Button = ({ name, url }: { name: string; url: string }) => {
  return (
    <a
      href={url}
      className="md:w-[472px] w-[330px] rounded-[32px] bg-white py-[23px] text-center   text-base font-semibold text-[#605C84] !transition   !duration-300 hover:!scale-105   "
    >
      {name}
    </a>
  )
}
export default Button
