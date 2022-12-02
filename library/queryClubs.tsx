import path from 'path';

import { Club } from './Club';

export interface Clubs extends Array<Club> { }

export default async function handleClubs(req: string) {

    const csvToJson = require('convert-csv-to-json')

    //Find the absolute path of the json directory
    const csvDirectory = path.join(process.cwd(), 'csv')

    //an array of objects with comma delimiter
    let json: Clubs[] = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvDirectory + '/england-premier-league-teams-2018-to-2019-stats.csv');

    type ObjectKey = keyof typeof json;
    // Get the field from the request
    const param = req as ObjectKey;
    let players: any[] = []

    // if the request contains 'all' and the file exists return
    // an array with all the players
    if (json.length > 1 && req == "all") {
        for (let i = 0; i < json.length; i++) {
            players.push(json[i])
        }
        return players

    } else if (json.length > 1 && json[0][param] == undefined) {
        //if the request does not contain 'all' and the field does not exist
        return null
    } else {
        //if there's a file and there are params
        //return that param for all the players
        for (let i = 0; i < json.length; i++) {
            players.push(json[i][param])
        }
        //Return an object with all cols
        return players
    }
}