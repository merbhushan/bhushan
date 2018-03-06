interface DataTableParams {
    headers: string[];
    hiddenHeaders?: string[];
}

class DataTable {
    objDataTableParams: DataTableParams;
    headers: Array<string>;
    aliases: string[];
    hiddenHeaders: string[]|null|undefined ;

    constructor(objDataTableParams: DataTableParams) {
        // Set value of data table parameters
        this.objDataTableParams = objDataTableParams;
        this.headers = objDataTableParams.headers;
        this.hiddenHeaders = objDataTableParams.hiddenHeaders;
        /**
         * Aliases will be created based on Headers value. 
         * Ex. 1
         * If header values is "First Name" then it's alias value will be "first_name". 
         */
        this.aliases = this.headerToAliasConversion();

        // If there is any hiddent hidders then add it's alias name in aliases variable
        if (this.hiddenHeaders) {
            this.aliases = this.aliases.concat(this.headerToAliasConversion(this.hiddenHeaders));    
        }
    }
    
    /**
     * This function is used to convert input string array into alias name.
     * @param headers : string array : default it's pointing this.headers.
     * @returns : string array : array of alias name
     */
    public headerToAliasConversion(headers: string[] = this.headers) {
        let arrResult: string[] = [];
        headers.forEach(element => {
            arrResult.push(this.convertToAlias(element));
        });            
        return arrResult;
    }
    
    /**
     * This function will convert input string to alias name format.
     * @param strHeader : string : String which shoud be converted to alias name format.
     * @returns : string : alias formated string.
     */
    public convertToAlias(strHeader: string): string {
        return strHeader.toLowerCase().replace(' ', '_');   
    }
}

export default DataTable;