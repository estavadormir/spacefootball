"use client"

import { useState, useEffect } from "react";
import { Club } from "../../library/Club";

export interface Clubs extends Array<Club> { }



export default function ClubsTable({ clubs }: { clubs: Clubs }) {

    const [sorting, setSorting] = useState({ key: "team_name", ascending: true });
    const [currentClubs, setCurrentClubs] = useState(clubs);

    useEffect(() => {
        const currentClubsCopy = [...currentClubs];

        const sortedCurrentClubs = currentClubsCopy.sort((a: any, b: any) => {
            return a[sorting.key].localeCompare(b[sorting.key], 'en', { numeric: true });
        });
        setCurrentClubs(
            sorting.ascending ? sortedCurrentClubs : sortedCurrentClubs.reverse()
        );
    }, [sorting]);

    function applySorting(key: string, ascending: boolean) {
        setSorting({ key: key, ascending: ascending });
    }

    return (
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                <thead className="bg-gray-100 [&>tr>th>div]:text-xs [&>tr>th>div]:sm:text-sm">
                    <tr>
                        <th
                            onClick={() => applySorting("team_name", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Team name


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("matches_played", !sorting.ascending)}
                            className="hidden sm:table-cell whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                #Matches
                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("wins", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Wins


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("losses", !sorting.ascending)}
                            className="hidden sm:table-cell whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Losses


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("draws", !sorting.ascending)}
                            className="hidden sm:table-cell whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Draws


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("performance_rank", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Rank
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {currentClubs.map((club: Club, index: number) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {club.team_name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 hidden sm:table-cell">
                                {club.matches_played}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{club.wins}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 hidden sm:table-cell">{club.losses}</td>

                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 hidden sm:table-cell">{club.draws}</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <span
                                    className={club.performance_rank > 10 ? `bg-secondary rounded  px-3 py-1.5 text-xs font-medium text-white` : `bg-green-400 rounded  px-3 py-1.5 text-xs font-medium text-white`}
                                >
                                    {club.performance_rank}
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 w-32">
                                <a
                                    className="group relative inline-block focus:outline-none focus:ring"
                                    href={`/club/${club.common_name}`}
                                >
                                    <span
                                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-secondary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                                    ></span>

                                    <span
                                        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                                    >
                                        View
                                    </span>
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}