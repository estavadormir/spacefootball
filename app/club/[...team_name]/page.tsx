import SquaredClub from "../../components/SquaredClub";
import Navigation from "../../Navigation";
import { Club } from "../../../library/Club";
import handleClub from "../../../library/queryClub";
import Footer from "../../components/Footer";
import handlePlayer from "../../../library/queryPlayer";
import { Player } from "../../../library/Player";

async function fetchData(params: any) {

    //if key is null or undefined, default to team_name
    if (params.team_name.length > 1) {
        const res = await handleClub(params.team_name[0], params.team_name[1])
        return res
    } else {
        const res = await handleClub('common_name', params.team_name)
        return res
    }

}
async function fetchPlayers(params: any) {
    try {
        console.log(params)
        let res: Player[] | null = []
        if (params.team_name[1] != undefined) {
            res = await handlePlayer(`CurrentClub`, params.team_name[1])
        } else {
            res = await handlePlayer(`CurrentClub`, params.team_name[0])
        }

        if (res) {
            const players = res.filter((obj) => {

                //loop through the obj and check if the value is equal to the param
                if (obj[`rank_in_club_top_scorer`] < 4 && obj[`rank_in_club_top_scorer`] > 0) {
                    return (obj);
                }
            })
            return players
        } else {
            //if no players are found, return null
            return
        }
    }
    catch (error) {
    }


}

export default async function Page({
    params,
}: {
    params: [full_name: string, value: string]
}) {
    const data = await fetchData(params)
    const topScorers = await fetchPlayers(params)

    if (data == null || topScorers == null) {
        return <h1>404</h1>
    } else {
        return (
            <main className=''>
                <Navigation></Navigation>
                <div className='flex [&>*]:flex [&>*]:flex-col h-full min-h-screen justify-center w-full sticky top-0'>
                    {
                        data.map((club: Club, index: number) => (
                            <div key={index} className='items-center mx-24 justify-start flex '>
                                <section className='mt-32'>
                                    <SquaredClub name={club.team_name} rank={club.performance_rank} wins={club.wins} goals={club.goals_scored}></SquaredClub>
                                </section>
                                <div className='bg-primary flex justify-center mt-32 h-96 max-w-2xl w-full'>
                                    <div className="bg-secondary m-4 w-full flex flex-col [&>*]:text-xl [&>*]:mx-auto justify-center [&>*>span]:font-light  [&>*]:font-semibold  [&>*]:text-primary ">
                                        <p>{`Losses: `}<span>{club.losses}</span></p>
                                        <p>{`League Position:`}<span>{club.league_position}</span></p>
                                        <p>{`Total corners:`}<span>{club.corners_total}</span></p>
                                        <p>{`Matches played: `}<span>{club.matches_played}</span></p>
                                        <p>{`Points per game: `}<span>{club.points_per_game}</span></p>
                                        <p>{`Shots: `}<span>{club.shots}</span></p>
                                        <p>{`Win percentage: `}<span>{club.win_percentage + `%`}</span></p>
                                        <p>{`Loss percentage: `}<span>{club.loss_percentage_ovearll + `%`}</span></p>
                                        <p>{`Wins away: `}<span>{club.wins_away}</span></p>
                                        <p>{`Wins home: `}<span>{club.wins_home}</span></p>
                                    </div>
                                    <div className="max-w-2xl -z-10 flex absolute justify-center bg-secondary w-[40vw] items-center h-80 mt-20 ml-[2vw]" >
                                    </div>
                                </div>
                                <div className='justify-start flex '>

                                    <section className='flex flex-col sm:flex-row mt-12'>
                                        {
                                            topScorers.map((topScorers: Player, index: number) => (
                                                <a href={`/player/${topScorers.full_name}`} key={index} className="rounded-xl bg-gradient-to-r mx-2 from-primary to-secondary p-0.5 shadow-xl transition hover:shadow-sm"
                                                >
                                                    <div className="rounded-[10px] bg-white p-4 sm:p-6">
                                                        <p>{`Top player #` + topScorers.rank_in_club_top_scorer}</p>
                                                        <time dateTime={topScorers.birthday_GMT} className="block text-xs text-gray-500">
                                                            {topScorers.birthday_GMT}
                                                        </time>
                                                        <p className="">{` ` + topScorers.full_name}</p>

                                                        <div className="mt-4 flex flex-wrap gap-1">
                                                            <span
                                                                className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-0.5 text-xs text-white"
                                                            >
                                                                {topScorers.position}
                                                            </span>

                                                            <span
                                                                className="whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-xs text-white"
                                                            >
                                                                {topScorers.goals_overall + ` goals`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))
                                        }
                                    </section>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Footer></Footer>
            </main>
        )
    }
}