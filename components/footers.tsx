import Footer1 from "./footer1"
import Footer2 from './footer2'
import Image from "next/image"
const footers = () => {
    return (
      <div className="bg-[#26215B] flex flex-col space-y-[47px] px-[120px] py-[71.5px]">
        <Footer1 />
        {/* <div>
            <Image
        </div> */}
        <Footer2 />
      </div>
    )
}
export default footers