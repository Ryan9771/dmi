interface InnerDict {
    [key: string]: number;
}

interface NestedDict {
    [key: string]: InnerDict;
}

/* Converts the correlation map into a nested dictionary */
export function correlationsToArray(csvData: string): NestedDict {
   /* Gets the rows and headers of the csv file */
   let rows = csvData.split('\n');
   let headers = rows[0].split(',');

   let dict: NestedDict = {};

   /* Creates an empty entry for each country name */
   for (let i = 1; i < headers.length; i++) {
       let header = headers[i].trim();
       if (header === "") {
           continue;
       }
       dict[header] = {};
   }

   /* Each country is assigned an inner dictionary with all other country
       correlations */
   for (let i = 1; i < rows.length; i++) {
       let values = rows[i].split(',');
       let country = values[0].trim();

       let innerDict: InnerDict = {}

       for (let j = 1; j < headers.length; j++) {
           let header = headers[j].trim();
           innerDict[header] = parseFloat(values[j]);
       }

       dict[country] = innerDict;
   }

   return dict 
}