import teamLogo from '../../public/images/Team_Logo_1.png'
import Image from 'next/image'

export default function SquaredPlayer({ name, goals, team, position }: { name: string, goals: number, team: string, position: string }) {
    return (
        <div className="flex justify-center bg-secondary z-10 w-[40vw] h-80 items-center mx-auto max-w-2xl">
            <div className="flex flex-col">
                <h1 className="flex z-10 text-4xl font-bold text-primary">{name}</h1>
                <a href={`/club/${`common_name`}/${team}`} className='hover:underline hover:decoration-white flex items-center justify-end pt-4 '>
                    <Image className="border-2 border-solid border-secondary rounded-lg" src={teamLogo} width={25} height={25} alt={`Team logo of` + team} />
                    <h2 className="flex justify-end z-10 text-xl font-semibold text-primary">{team + ` club`}</h2>
                </a>
                <h3 className="flex justify-end z-10 text-sm  mt-5 text-white">{position + ` with ` + goals + ` goals. `}</h3>
            </div>
            <div className="max-w-2xl -z-10 flex absolute justify-center bg-primary w-[40vw] items-center h-72 mt-20 ml-[2vw]" >
            </div>
        </div>
    );
}