export type Routes = "Home"|"Contac"|"AboutUS"|"Math"|"Series";

export interface Series{
    titulo :string,
    año: number,
    sugiriente: string,
    vista?: boolean
}
export interface Cliente {
    id: number
    nombre: string
    email: string
    age: number
}