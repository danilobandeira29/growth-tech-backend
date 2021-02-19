import { AbstractLoadAllPostRepository } from '../interfaces/AbstractLoadAllPostRepository'
import { OutputLoadAllPostRepository } from '../dtos/OutputLoadAllPostRepository'
import { OutputUserRepository } from '../dtos/OutputUserRepository'

export class FakeLoadAllPostRepository
	implements AbstractLoadAllPostRepository<OutputLoadAllPostRepository> {
	private readonly users = [
		{
			id: 10,
			name: 'Danilo Bandeira',
			username: 'Bandeira',
			email: 'danilobandeira29@gmail.com',
			address: {
				street: 'Kulas Light',
				suite: 'Apt. 10',
				city: 'Teresina',
				zipcode: '4567489-10',
				geo: {
					lat: '-37.4564',
					lng: '-37.4564',
				},
			},
			phone: '(086) 32904-7310',
			website: 'github.com',
			company: {
				name: 'My company',
				catchPhase: 'Multi-layered client-server neural-net',
				bs: 'harness real-time e-markets',
			},
		},
	] as OutputUserRepository[]

	private readonly allPost = [
		{
			id: 1,
			userId: 10,
			title: 'Hello, world',
			body: 'Olaaaa',
		},
		{
			id: 2,
			userId: 10,
			title: 'Hello, world',
			body: 'Olá, mundo!!',
		},
	] as OutputLoadAllPostRepository[]

	async findAll(): Promise<OutputLoadAllPostRepository[]> {
		const allPostWithUserNameAndCompany = this.allPost.map(post => {
			const user = this.users.find(item => item.id === post.userId)
			return {
				...post,
				user: {
					name: user?.name,
					company: {
						name: user?.company?.name,
					},
				},
			}
		})

		return allPostWithUserNameAndCompany
	}
}
