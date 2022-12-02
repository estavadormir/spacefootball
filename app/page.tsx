
import SquaredHeading from './components/SquaredHeading'
import Table from './components/ClubsTable';
import Navigation from './Navigation'
import handleClubs from '../library/queryClubs';
import handlePlayers from '../library/queryPlayers';
import Footer from './components/Footer';


async function getPlayers() {
    const resPlayers = await handlePlayers('all');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!resPlayers) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return resPlayers;
}
async function getClubs() {
    let resClubs = await handleClubs('all');

    if (!resClubs) {
        throw new Error('Failed to fetch data');
    }

    return resClubs;
}

export default async function Home() {
    const players = await getPlayers();
    const clubs = await getClubs();
    if (clubs == null) {
        return <h1>404</h1>
    } else {
        return (
            <>
                <main className=''>
                    <Navigation></Navigation>
                    <div className='flex [&>*]:flex [&>*]:flex-col h-full min-h-screen justify-center w-full sticky top-0'>
                        <div className='mx-24 justify-start flex h-auto'>
                            <section className='mt-32'>
                                <SquaredHeading title={`SpaceFootball`} players={players.length} clubs={clubs.length}></SquaredHeading>
                            </section>
                            <section className='flex justify-center mt-32'>
                                <Table clubs={clubs}></Table>
                            </section>
                        </div>
                    </div>
                </main>

                <Footer></Footer>
            </>
        )
    }
}
