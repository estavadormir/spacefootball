export default function SquaredHeading({ players, clubs, title }: { title: string, players: number, clubs: number }) {
    return (
        <div className="flex justify-center bg-secondary z-10 w-2/3 sm:w-[40vw] h-80 items-center mx-auto">
            <div className="flex flex-col">
                <h1 className="flex z-10 text-2xl sm:text-4xl font-bold text-primary px-3">{title}</h1>
                <h2 className="flex justify-end z-10 text-xl mt-5 font-semibold text-primary px-3 text-center sm:text-right">Season 2018-2019</h2>
                <h3 className="flex justify-end z-10 text-sm  mt-5 text-white">{players + ` players in ` + clubs + ` clubs`}</h3>
            </div>
            <div className="-z-10 flex absolute justify-center bg-primary w-2/3 sm:w-[40vw] items-center h-72 mt-20 ml-[2vw]" >
            </div>
        </div>
    );
}