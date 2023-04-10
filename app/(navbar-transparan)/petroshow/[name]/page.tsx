'use client'

import SectionTitle from '../../../../components/utils/section-title'
import { petroshowData } from '../../../../data/petroshow'
import { notFound } from 'next/navigation'

function getPageData(param: string) {
    const data = petroshowData.filter(({ slug }) => slug === param)
    if (data[0]) {
        return data[0]
    }
    return null
}

export default function CompetitionPage({
    params,
}: {
    params: { name: string }
}) {

    const data = getPageData(params.name)

    if (!data) {
        notFound()
    }

    return (
        <main className='flex flex-col items-center justify-center bg-center bg-cover bg-light'>
            <div className='w-full h-[55vh]' style={{
                backgroundImage: `url(${data.heroImage})`,
            }}>

            </div>

            <article className='flex flex-col items-center justify-center px-8 lg:max-w-5xl lg:px-0'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h6 className='mt-12 mb-6 font-medium uppercase lg:mt-24 text-secondary'>{data.name}</h6>
                    <SectionTitle
                        title={data.title}
                        className="mb-12 text-2xl text-center lg:text-5xl lg:max-w-4xl"
                    />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center place-content-center '>
                    <div className='lg:col-span-2'>
                        <p className='pr-4 text-xl text-justify'>
                            {data.article}
                        </p>
                    </div>
                    <div className='lg:col-span-1'>
                        <div className='overflow-hidden rounded-xl '>
                            <img src={data.articleImage} alt={data.name} className={'w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                    <div className='pt-12 lg:col-span-3'>
                        <p className='text-xl text-justify'>
                            {data.article2}
                        </p>
                    </div>
                </div>
            </article>


            <section className='w-full mt-12 bg-gradient-to-br from-primary via-secondary to-white'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h6 className='mt-6 mb-6 font-medium uppercase lg:mt-16 text-whiteb'>Petroshow in number</h6>
                    <div className='flex flex-col justify-around gap-8 mt-12 mb-16 space-y-6 lg:space-y-0 lg:flex-row '>
                        <div className='flex flex-col items-center justify-center w-[200px] text-center'>
                            <h3 className='w-full mb-6 text-6xl font-bold text-whiteb '>{data.participant}+</h3>
                            <p className='font-light text-whiteb'>
                                participants for <br />
                                an offline event
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[200px] text-center'>
                            <h3 className='mb-6 text-6xl font-bold text-whiteb'>{data.remarkableSpeaker}</h3>
                            <p className='font-light text-whiteb'>
                                remarkable <br />
                                speakers
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[200px] text-center'>
                            <h3 className='mb-6 text-6xl font-bold text-whiteb'>{data.partner}</h3>
                            <p className='font-light text-whiteb'>
                                community <br />
                                partners
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <article className='flex flex-col items-center justify-center px-8 mb-12 lg:max-w-5xl lg:px-0'>
                <div className='flex flex-col items-start w-full justify-left'>
                    <SectionTitle
                        title={data.title2}
                        className="mt-12 text-xl text-left lg:text-4xl"
                    />
                    <h6 className='mb-12 font-medium uppercase text-secondary'>SPEAKER : {data.speaker}</h6>
                </div>
                <p className='pr-4 text-xl text-justify'>
                    {data.article3}
                </p>
            </article>

            <article className='flex flex-col items-center justify-center px-8 lg:max-w-5xl lg:px-0'>
                <div className='flex flex-col items-start w-full justify-left'>
                    <SectionTitle
                        title={data.title2}
                        className="mt-12 text-xl text-left lg:text-4xl"
                    />
                    <h6 className='mb-12 font-medium uppercase text-secondary'>SPEAKER : {data.speaker}</h6>
                </div>
                <div className='w-full mb-10 overflow-hidden rounded-xl'>
                    <img src={data.articleImage2} alt={data.name} className={'w-full hover:scale-105 transition duration-300'} />
                </div>
                <p className='pr-4 text-xl text-justify'>
                    {data.article3}
                </p>
            </article>

            <article className='flex flex-col items-center justify-center px-8 lg:max-w-5xl lg:px-0'>
                <div className='flex flex-col items-start w-full justify-left'>
                    <SectionTitle
                        title={data.title2}
                        className="mt-12 text-xl text-left lg:text-4xl"
                    />
                    <h6 className='mb-12 font-medium uppercase text-secondary'>PERFORMANCE BY : {data.performer}</h6>
                </div>
                <div className='grid w-full gap-2 lg:grid-cols-3 lg:grid-rows-2'>
                    <div className='lg:row-span-2 lg:col-span-2 h-[500px]'>
                        <div className='h-full mb-10 overflow-hidden rounded-3xl'>
                            <img src={data.performerImage} alt={data.name} className={'w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                    <div className='h-full lg:items-end lg:flex lg:col-span-1 lg:row-span-1'>
                        <div className='mb-10 overflow-hidden rounded-3xl'>
                            <img src={data.performerImage2} alt={data.name} className={' w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                    <div className='h-full lg:col-span-1 lg:row-span-1'>
                        <div className='mb-10 overflow-hidden rounded-3xl'>
                            <img src={data.performerImage3} alt={data.name} className={' w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                </div>

            </article>


            <article className='flex flex-col items-center justify-center px-8 mt-6 mb-12 lg:max-w-5xl lg:px-0'>
                <div className='flex flex-col items-start w-full justify-left'>
                    <SectionTitle
                        title={'ART INSTALLATION'}
                        className="mt-12 text-xl text-left lg:text-4xl"
                    />
                </div>
                <div className='grid w-full gap-5 lg:grid-cols-3'>
                    <div className='col-span-1'>
                        <div className='w-full h-full mb-10 overflow-hidden lg:flex lg:items-center rounded-xl'>
                            <img src={data.artImage} alt={data.name} className={'w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='w-full h-full mb-10 overflow-hidden lg:flex lg:items-center rounded-xl'>
                            <img src={data.artImage2} alt={data.name} className={'w-full hover:scale-105 transition duration-300'} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-left'>
                    <h6 className='mt-10 mb-4 text-xl font-medium uppercase text-secondary'>SPEAKER : {data.artTitle}</h6>
                    <p className='pr-4 text-xl text-justify'>
                        {data.artArticle}
                    </p>
                </div>
                <div className='flex flex-col w-full justify-left'>
                    <h6 className='mt-10 mb-4 text-xl font-medium uppercase text-secondary'>SPEAKER : {data.artTitle2}</h6>
                    <p className='pr-4 text-xl text-justify'>
                        {data.artArticle2}
                    </p>
                </div>
                <div className='flex flex-col w-full justify-left'>
                    <h6 className='mt-10 mb-4 text-xl font-medium uppercase text-secondary'>SPEAKER : {data.artTitle3}</h6>
                    <p className='pr-4 text-xl text-justify'>
                        {data.artArticle3}
                    </p>
                </div>

            </article>

            {/* <div className='flex w-full max-w-5xl mt-24 border-t-2 border-primary justify-left'>
                <SectionTitle
                    title={'Wanna see the next news?'}
                    className="mt-12 text-xl text-left lg:text-4xl"
                />
            </div> */}
        </main>
    )
};
