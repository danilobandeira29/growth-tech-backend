import { CreateUserService } from '../src/data/user/services/CreateUserService'
import { FakeUserRepository } from '../src/infra/repository/fakes/FakeUserRepository'

let fakeUserRespository: FakeUserRepository
let createUserService: CreateUserService
let spyFindOneByEmailFromFakeUserRepository: jest.SpyInstance

describe('Create User Service', () => {
	beforeEach(() => {
		fakeUserRespository = new FakeUserRepository()
		createUserService = new CreateUserService(fakeUserRespository)
		spyFindOneByEmailFromFakeUserRepository = jest.spyOn(
			fakeUserRespository,
			'findOneByEmail',
		)
	})

	it('should be able to create a new user', async () => {
		const newUser = {
			name: 'John Doe',
			username: 'Doe',
			email: 'johndoe@test.com',
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

		const user = await createUserService.execute(newUser)

		expect(Number.isNaN(user.id)).toBe(false)
		expect(spyFindOneByEmailFromFakeUserRepository).toHaveBeenCalledTimes(1)
		expect(spyFindOneByEmailFromFakeUserRepository).toHaveBeenCalledWith(
			newUser.email,
		)
	})

	it('should not be able to create a new user with that is already in use', async () => {
		const newUser = {
			name: 'John Doe',
			username: 'Doe',
			email: 'johndoe@test.com',
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

		const newUserWithEmailIsAlreadyInUse = {
			name: 'John Doe',
			username: 'Doe',
			email: 'johndoe@test.com',
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

		await createUserService.execute(newUser)

		await expect(
			createUserService.execute(newUserWithEmailIsAlreadyInUse),
		).rejects.toThrowError()
		expect(spyFindOneByEmailFromFakeUserRepository).toHaveBeenCalledWith(
			newUserWithEmailIsAlreadyInUse.email,
		)
	})
})
