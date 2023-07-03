/* Converts the csv to a 2D array for table use */
export function csvToArray(csv: string): string[][] {
    const rows: string[] = csv.split('\n');
    const dataArray: string[][] = [];

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].split(',');
        dataArray.push(row);
    }
    return dataArray;
}