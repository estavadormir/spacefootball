import Navigation from "../Navigation";
import Footer from "../components/Footer";

export default async function Page() {
    return (
        <main className=''>
            <Navigation></Navigation>
            <section className='mx-auto flex [&>*]:flex [&>*]:flex-col h-full min-h-screen justify-center max-w-xl'>
                <div className="mt-32">
                    <h1 className="underline decoration-secondary font-bold text-2xl pb-2">Purpose:</h1>
                    <p>The goal of this challenge is to better understand your technical skills, way of thinking and working, and
                        what matters to you as a developer. It is not meant to take too much of your time – our target is 4
                        hours, and please don’t spend more than 6 – so don’t worry if it doesn’t feel “finished”; this is more
                        likely a calibration problem on our side than a speed problem on yours. If you have questions, don’t
                        hesitate to ask. But if something is unclear or not well-defined, feel free to take the opportunity to show
                        off your creativity. We will have time to discuss the approach and design choices together during our inperson meeting.
                    </p>
                    <h2 className="underline decoration-secondary font-bold text-2xl pt-5 pb-2">Business Need:</h2>
                    <p>Create a basic stats web app – “SpaceFootball”– showing data for English Premier League football clubs
                        from the 2018-2019 season.
                    </p>
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}