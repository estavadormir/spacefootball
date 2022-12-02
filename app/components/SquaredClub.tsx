export default function SquaredPlayer({ name, goals, rank, wins }: { name: string, goals: number, rank: number, wins: number }) {
    return (
        <div className="flex justify-center bg-secondary z-10 w-[40vw] h-80 items-center mx-auto max-w-2xl">
            <div className="flex flex-col">
                <h1 className="flex z-10 text-4xl font-bold text-primary">{name}</h1>
                <h2 className="flex justify-end z-10 text-2xl mt-5 font-semibold text-primary">{wins + ` wins`}</h2>
                <h3 className="flex justify-end z-10 text-sm  mt-5 text-white">{`#` + rank + ` with ` + goals + ` goals. `}</h3>
            </div>
            <div className="-z-10 flex absolute justify-center bg-primary w-[40vw] items-center h-72 mt-20 ml-[2vw] max-w-2xl" >
            </div>
        </div>
    );
}