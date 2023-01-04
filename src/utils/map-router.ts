import route, { mapPathNameToEl } from '@/router'
import { IRoles } from '@/service/modules/type'
import { RouteObject } from 'react-router-dom'

function mapFileToEl(keys: string[], be: RouteObject[]) {
	console.log(be[2])
	keys.forEach((key) => {
		const el = mapPathNameToEl(key)
		const obj: RouteObject = {}
		obj.path = be[2].path + '/' + key
		obj.element = el
		be[2].children!.push(obj)
	})
}

export function mapMenuToRoutes(roles: IRoles | undefined) {
	const allFileKeys: string[] = []
	const files = require.context('@/views/home/c-views', true, /\.tsx/)
	files.keys().forEach((key) => {
		allFileKeys.push(key.split('.')[1].split('/')[1])
	})
	const filterRoles = allFileKeys.filter((item) => roles?.menus.includes(item))
	mapFileToEl(filterRoles, route)
}
