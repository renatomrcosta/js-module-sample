export interface MyTsInterface {
    id: number,
    name: string
}

export function getItem(someName: string): MyTsInterface {
    return {
        id: 10,
        name: someName
    }
}
