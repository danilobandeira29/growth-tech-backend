import { AbstractUserRepository } from '../interfaces/AbstractUserRepository'
import { InputUserRepository } from '../dtos/InputUserRepository'
import { OutputUserRepository } from '../dtos/OutputUserRepository'

export class FakeUserRepository
	implements AbstractUserRepository<InputUserRepository, OutputUserRepository> {
	private users = [
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

	async create(data: InputUserRepository): Promise<OutputUserRepository> {
		const user = {
			...data,
			id: Math.floor(Math.random() * 100),
		}

		this.users.push(user)

		return user
	}

	async findOneByEmail(
		email: string,
	): Promise<OutputUserRepository | undefined> {
		const user = this.users.find(item => item.email === email)

		return user
	}

	async findOneById(id: number): Promise<OutputUserRepository | undefined> {
		const user = this.users.find(item => item.id === id)

		return user
	}
}
