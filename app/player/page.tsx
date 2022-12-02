import Navigation from "../Navigation";
import SquaredHeading from "../components/SquaredHeading";
import Table from "../components/PlayersTable";
import handlePlayers from '../../library/queryPlayers';
import handleClubs from "../../library/queryClubs";
import Footer from "../components/Footer";

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
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!resClubs) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return resClubs;
}
export default async function Page() {
    const players = await getPlayers();
    const clubs = await getClubs();

    return (<>
        <main className=''>
            <Navigation></Navigation>
            <div className='flex [&>*]:flex [&>*]:flex-col h-full min-h-screen justify-center w-full sticky top-0'>
                <div className='mx-24 justify-start flex'>
                    <section className='mt-32'>
                        <SquaredHeading title={`Players`} players={players.length} clubs={clubs.length}></SquaredHeading>
                    </section>
                    <div className='flex justify-center mt-32'>
                        <Table players={players}></Table>
                    </div>
                </div>
            </div>
        </main>

        <Footer></Footer>
    </>
    )
}