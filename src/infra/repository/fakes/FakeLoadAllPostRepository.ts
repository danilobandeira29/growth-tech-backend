import { AbstractLoadAllPostRepository } from '../interfaces/AbstractLoadAllPostRepository'
import { OutputLoadAllPostRepository } from '../dtos/OutputLoadAllPostRepository'

export class FakeLoadAllPostRepository
	implements AbstractLoadAllPostRepository<OutputLoadAllPostRepository> {
	private readonly allPost = [
		{
			id: 1,
			userId: 2,
			title: 'Hello, world',
			body: 'Olaaaa',
		},
	] as OutputLoadAllPostRepository[]

	async findAll(): Promise<OutputLoadAllPostRepository[]> {
		return this.allPost
	}
}
