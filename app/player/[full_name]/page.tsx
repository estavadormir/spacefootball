import { Player } from "../../../library/Player";
import SquaredPlayer from "../../components/SquaredPlayer";
import Navigation from "../../Navigation";
import handlePlayer from "../../../library/queryPlayer";
import Footer from "../../components/Footer";

async function fetchData(full_name: string) {
  const res = await handlePlayer('full_name', decodeURIComponent(full_name))
  return res
}

export default async function Page({
  params,
}: {
  params: { full_name: string };
}) {
  const data = await fetchData(params.full_name)
  if (data == null) {
    return <h1>404</h1>
  } else {
    return (
      <main className=''>
        <Navigation></Navigation>
        <div className='flex [&>*]:flex [&>*]:flex-col h-full min-h-screen justify-center w-full sticky top-0'>
          {
            data.map((player: Player, index: number) => (
              <div key={index} className='mx-24 justify-start flex'>
                <section className='mt-32'>
                  <SquaredPlayer name={player.full_name} position={player.position} team={player.CurrentClub} goals={player.goals_overall}></SquaredPlayer>
                </section>
                <div className='bg-primary p-5 flex justify-center mt-32 h-96 max-w-2xl'>
                  <div className="bg-secondary justify-center [&>*]:mx-auto w-full flex flex-col [&>*]:text-xl [&>*>span]:font-light  [&>*]:font-semibold  [&>*]:text-primary ">
                    <p>{`Appearances: `}<span>{player.appearances_overall}</span></p>
                    <p>{`Red cards:`}<span>{player.red_cards_overall}</span></p>
                    <p>{`Yellow cards:`}<span>{player.yellow_cards_overall}</span></p>
                    <p>{`Time per match: `}<span>{player.min_per_match + `m`}</span></p>
                    <p>{`Age: `}<span>{player.age}</span></p>
                    <p>{`Nationality: `}<span>{player.nationality}</span></p>
                    <p>{`Rank in League (ATK): `}<span>{player.rank_in_league_top_attackers}</span></p>
                    <p>{`Rank in League (MDF): `}<span>{player.rank_in_league_top_midfielders}</span></p>
                    <p>{`Rank in League (DEF): `}<span>{player.rank_in_league_top_defenders}</span></p>
                    <p>{`Rank in Club (goals): `}<span>{player.rank_in_club_top_scorer}</span></p>
                  </div>
                  <div className="max-w-2xl -z-10 flex absolute justify-center bg-secondary w-[40vw] items-center h-80 mt-20 ml-[2vw]" >
                  </div>
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