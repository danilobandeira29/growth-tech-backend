import { CreateUserService } from '../src/data/user/services/CreateUserService'
import { FakeUserRepository } from '../src/infra/repository/fakes/FakeUserRepository'

describe('Create User Service', () => {
	it('should be able to create a new user', async () => {
		const newUser = {
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
		}

		const fakeUserRespository = new FakeUserRepository()
		const createUserService = new CreateUserService(fakeUserRespository)
		const user = await createUserService.execute(newUser)

		expect(Number.isNaN(user.id)).toBe(false)
	})
})
