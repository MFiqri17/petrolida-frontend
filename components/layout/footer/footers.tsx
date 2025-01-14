import Footer1 from "./footer1"
import Footer2 from './footer2'
import Image from "next/image"
const footers = () => {
    return (
      <div className="flex flex-col space-y-[47px] bg-[#26215B] xl:px-[120px] px-4 md:py-[71.5px] pb-8">
        <Footer1 />
        <hr className="border-none bg-[#F3F4F7]/[.06] h-[1px] " />
        <Footer2 />
      </div>
    )
}
export default footers