'use client'


export default function Contact({ type }: { type: String }) {
    if (type === 'competition') {
        return (
            <>

                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EDEEF3] bg-[right_-20rem_top_-12rem]  bg-no-repeat py-4" style={
                    {
                        backgroundImage: "url('/contact/bg.png')",
                    }
                }>
                    <div className="px-10 py-8 lg:px-24 lg:py-36">
                        <h1 className="text-4xl font-bold text-[#07003F] pb-4 lg:text-left text-center">You still have a question?</h1>
                        <p className="text-lg font-semibold text-[#605C84] lg:text-left text-center">Explore our FAQ above, if you can't find the answer <br /> you're looking for, please contact us.</p>
                    </div>
                    <div className="flex items-center justify-center" >
                        <a target={'_blank'} href="https://line.me/ti/p/krishnananda" className="transition duration-300 ease-linear hover:-translate-y-1">
                            <div className="bg-[#FBFBFC] rounded-[30px] p-4 lg:pl-8 lg:py-6 grid lg:grid-cols-3 lg:gap-0 gap-4">
                                <div className="text-center lg:text-right lg:col-span-2">
                                    <p className="text-[#07003F] text-sm lg:text-lg font-medium pb-2">
                                        I Gede Krishnananda Wibawa <br />
                                        Oil Rig Design Comp <span className="font-bold ">PIC</span>
                                    </p>
                                    <p className="text-[#07003F] text-sm lg:text-lg font-bold hover:underline">
                                        id line : krishnananda
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src="/icon/line-app.svg" alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    } else if (type === 'landing') {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EDEEF3] bg-[right_-20rem_top_-12rem]  bg-no-repeat py-4" style={
                {
                    backgroundImage: "url('/contact/bg.png')",
                }
            }>
                <div className="px-10 py-8 lg:px-24 lg:py-36">
                    <h1 className="text-4xl font-bold text-[#07003F] pb-4 lg:text-left text-center">You still have a question?</h1>
                    <p className="text-lg font-semibold text-[#605C84] lg:text-left text-center">Explore our FAQ above, if you can't find the answer <br /> you're looking for, please contact us.</p>
                </div>
                <div className="flex items-center justify-center" >
                    <a target={'_blank'} href="https://line.me/ti/p/krishnananda" className="transition duration-300 ease-linear hover:-translate-y-1">
                        <div className="bg-[#FBFBFC] rounded-[30px] p-4 lg:pl-8 lg:py-6 grid lg:grid-cols-3 lg:gap-0 gap-4">
                            <div className="text-center lg:text-right lg:col-span-2">
                                <p className="text-[#07003F] text-sm lg:text-lg font-medium pb-2">
                                    I Gede Krishnananda Wibawa <br />
                                    Oil Rig Design Comp <span className="font-bold ">PIC</span>
                                </p>
                                <p className="text-[#07003F] text-sm lg:text-lg font-bold hover:underline">
                                    id line : krishnananda
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/icon/line-app.svg" alt="" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <>
            </>
        );
    }
};
