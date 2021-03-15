export const GET_COVID: string = 'GET_COVID'
export const GET_COVID_GLOBAL = 'GET_COVID_GLOBAL'
export const GET_DETAIL_COVID = 'GET_DETAIL_COVID'

export interface DataCovidWorld {
    provinsi :	string
    kasus :	number
    dirawat	 :number
    sembuh :	number
    meninggal :	number
}

export interface CovidState {
    positif: number,
    dirawat: number,
    sembuh: number,
    meninggal: number,
    lastUpdate: string
}


export interface DetailDataCovid {
    total: {
        positif: number,
        dirawat: number,
        sembuh: number,
        meninggal: number,
        lastUpdate: string
    },
    penambahan: {
        positif: number,
        dirawat: number,
        sembuh: number,
        meninggal: number,
        tanggal: string,
        created: string
    },
    data: {
        odp: number,
        pdp: number,
        total_spesimen: number,
        total_spesimen_negatif: number
    }
}

