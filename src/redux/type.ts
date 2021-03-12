export const GET_COVID: string = 'GET_COVID'
export const GET_COVID_GLOBAL = 'GET_COVID_GLOBAL'

export interface DataCovidWorld {
    provinsi :	string
    kasus :	number
    dirawat	 :number
    sembuh :	number
    meninggal :	number
}