import { CreatePostService } from '../src/data/post/services/CreatePostService'
import { FakeUserRepository } from '../src/infra/repository/fakes/FakeUserRepository'
import { FakePostRepository } from '../src/infra/repository/fakes/FakePostRepository'

let fakePostRepository: FakePostRepository
let fakeUserRepository: FakeUserRepository
let createPostService: CreatePostService
let spyFindOneByIdFromFakeUserRepository: jest.SpyInstance
let spyCreateFromFakePostRepository: jest.SpyInstance

describe('Create User Service', () => {
	beforeEach(() => {
		fakePostRepository = new FakePostRepository()
		fakeUserRepository = new FakeUserRepository()
		createPostService = new CreatePostService(
			fakePostRepository,
			fakeUserRepository,
		)
		spyFindOneByIdFromFakeUserRepository = jest.spyOn(
			fakeUserRepository,
			'findOneById',
		)
		spyCreateFromFakePostRepository = jest.spyOn(fakePostRepository, 'create')
	})
	it('should be able to create a new post', async () => {
		const user = {
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
		}

		const newPost = {
			userId: user.id,
			title: 'title post',
			body: 'title body',
		}

		const post = await createPostService.execute(newPost)

		expect(Number.isNaN(post.id)).toBe(false)
		expect(spyCreateFromFakePostRepository).toHaveBeenCalledTimes(1)
		expect(spyCreateFromFakePostRepository).toHaveBeenCalledWith(newPost)
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledTimes(1)
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledWith(
			newPost.userId,
		)
	})

	it('should not be able to create a new post with no existing user', async () => {
		const newPost = {
			userId: 120,
			title: 'title post',
			body: 'title body',
		}

		await expect(createPostService.execute(newPost)).rejects.toThrowError()
		expect(spyCreateFromFakePostRepository).toHaveBeenCalledTimes(0)
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledTimes(1)
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledWith(
			newPost.userId,
		)
	})
})
