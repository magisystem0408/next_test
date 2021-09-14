export interface POST {
    userId: number
    id: number
    title: string
    body: string
}

export interface COMMENT {
    postid: number
    id: number
    name: string
    email: string
    body: string
}

export interface TASK{
    userid:number
    id:number
    title:string
    complated:boolean
}