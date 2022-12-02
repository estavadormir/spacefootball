import path from 'path';

import { Club } from './Club';


export default async function handleClub(params: string, value: string) {
    const csvToJson = require('convert-csv-to-json')

    //Find the absolute path of the json directory
    const csvDirectory = path.join(process.cwd(), 'csv')

    //an array of objects with comma delimiter
    let json: Club[] = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvDirectory + '/england-premier-league-teams-2018-to-2019-stats.csv')

    type ObjectKey = keyof typeof json

    //if req is not null, then get the field from the request
    if (params !== null && value !== null) {
        const param = params as ObjectKey
        const val = decodeURIComponent(value) as String || Number

        // Sort the array
        const clubs = json.filter((obj) => {

            //loop through the obj and check if the value is equal to the param
            if (obj[param as keyof Club] === val) {
                return (obj);
            }
        })

        if (clubs.length > 0) {
            return clubs
        } else {
            return null
        }
    } else {
        return null
    }
}