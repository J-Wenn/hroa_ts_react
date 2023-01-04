export interface ILoginData {
	mobile: string
	password: string
}

// export interface Itoken {
// 	success: boolean
// 	code: number
// 	data: string
// 	message: string
// }

export interface IRoles {
	menus: string[]
	points: string[]
	apis: any[]
}

export interface IData {
	userId?: string
	mobile?: string
	username?: string
	roles?: IRoles
	companyId?: string
	company?: string
}

export interface IProfile {
	success: boolean
	code: number
	data: IData
	message: string
}
