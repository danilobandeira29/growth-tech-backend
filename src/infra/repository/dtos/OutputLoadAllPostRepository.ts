import { OutputUserRepository } from './OutputUserRepository'

export type OutputLoadAllPostRepository = {
	id: number
	userId: number
	user: OutputUserRepository
	title: string
	body: string
}
