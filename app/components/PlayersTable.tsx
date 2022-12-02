"use client"

import { useState, useEffect } from "react";
import { Player } from "../../library/Player";

export interface Players extends Array<Player> { }

export default function PlayersTable({ players }: { players: Players }) {
    const [sorting, setSorting] = useState({ key: "full_name", ascending: true });
    const [currentPlayers, setCurrentPlayers] = useState(players);

    useEffect(() => {
        const currentPlayersCopy = [...currentPlayers];

        const sortedCurrentPlayers = currentPlayersCopy.sort((a: any, b: any) => {
            return a[sorting.key].localeCompare(b[sorting.key], 'en', { numeric: true });
        });
        setCurrentPlayers(
            sorting.ascending ? sortedCurrentPlayers : sortedCurrentPlayers.reverse()
        );
    }, [sorting]);

    function applySorting(key: string, ascending: boolean) {
        setSorting({ key: key, ascending: ascending });
    }

    return (
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm px-10">
                <thead className="bg-gray-100 [&>tr>th>div]:text-xs [&>tr>th>div]:sm:text-sm">
                    <tr>
                        <th
                            onClick={() => applySorting("age", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Age


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("full_name", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            <div className="flex items-center gap-2">
                                Full Name


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("goals_overall", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900  hidden sm:table-cell"
                        >
                            <div className="flex items-center gap-2">
                                Goals


                            </div>
                        </th>
                        <th
                            onClick={() => applySorting("CurrentClub", !sorting.ascending)}
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 hidden sm:table-cell"
                        >
                            Club
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 [&>tr>td]:text-xs [&>tr>td]:sm:text-sm">
                    {currentPlayers.map((player: Player, index: number) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {player.age}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {player.full_name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700  hidden sm:table-cell">{player.goals_overall}</td>
                            <td className="whitespace-nowrap px-4 py-2 hidden sm:table-cell">
                                <a href={`/club/${`common_name`}/${player.CurrentClub}`}
                                    className="hover:opacity-75 rounded bg-primary px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    {player.CurrentClub}
                                </a>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a
                                    className="group relative inline-block focus:outline-none focus:ring text-xs sm:text-sm"
                                    href={`/player/${player.full_name}`}
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