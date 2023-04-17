import Image from "next/image"

const TicketData = [
    {
        id: 1,
        ticketId: "#PSV0001",
        title: "E-ticket",
        name: "Muhammad Irfan",
        date: "18 Juni 2023",
        time: "13:00 - Until end",
        venue: "Graha ITS",
        qrcodeImage: "/petroshow/vol-2/qrcode.png"
    }
]


export default function EticketPage() {
    return (
        <section>
            <div className="flex flex-col justify-between lg:flex-row">
                <div>
                    <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
                        E-ticket
                    </h1>
                </div>

                <div>
                    <button className="flex justify-between gap-4 px-6 py-2 transition duration-300 rounded-full hover:-translate-y-1 bg-secondary text-whiteb">
                        <span>
                            <Image
                                src="/icon/download-doc.svg"
                                width={19}
                                height={21}
                                alt="download-pdf"
                            />
                        </span>
                        Download PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3">
                {TicketData.map((item) => (
                    <div className="flex flex-col mb-16 lg:mb-4 items-center lg:h-[760px] lg:w-[310px] gap-3 bg-[url('/petroshow/vol-2/ticket.png')] bg-no-repeat bg-center" key={item.id}>
                        <p className="mt-32 text-2xl font-semibold underline text-primary decoration-primary decoration-2 underline-offset-4">
                            {item.ticketId}
                        </p>

                        <div className="flex flex-col items-center justify-between gap-2">
                            <div>
                                <p className="text-primary">
                                    Name
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-primary">
                                    {item.name}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-2">
                            <div>
                                <p className="text-primary">
                                    Date
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-primary">
                                    {item.date}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-2">
                            <div>
                                <p className="text-primary">
                                    Time
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-primary">
                                    {item.time}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-2">
                            <div>
                                <p className="text-primary">
                                    Venue
                                </p>
                            </div>
                            <div>
                                <p className="text-xl font-semibold text-primary">
                                    {item.venue}
                                </p>
                            </div>
                        </div>

                        {/* barcode */}
                        <div className="flex flex-col items-center pb-8 lg:pb-0">
                            <div className="mt-32">
                                <Image
                                    src={item.qrcodeImage}
                                    placeholder="blur"
                                    blurDataURL={item.qrcodeImage}
                                    width={100}
                                    height={100}
                                    alt="qrcode"
                                />
                            </div>
                            <div>
                                <p className="pt-2 font-semibold">
                                    scan this qr code on <br />
                                    the <span className="text-secondary">ticketing tenant</span>
                                </p>
                            </div>
                        </div>

                    </div>
                ))}


            </div>
        </section>
    )
};
