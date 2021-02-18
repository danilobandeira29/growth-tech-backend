import { CreatePostService } from '../src/data/post/services/CreatePostService'
import { FakeUserRepository } from '../src/infra/repository/fakes/FakeUserRepository'
import { FakePostRepository } from '../src/infra/repository/fakes/FakePostRepository'

let fakePostRepository: FakePostRepository
let fakeUserRepository: FakeUserRepository
let createPostService: CreatePostService
let spyFindOneByIdFromFakeUserRepository: jest.SpyInstance

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
	})
	it('should be able to create a new post', async () => {
		const newPost = {
			userId: 10,
			title: 'title post',
			body: 'title body',
		}

		const post = await createPostService.execute(newPost)

		expect(Number.isNaN(post.id)).toBe(false)
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
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledTimes(1)
		expect(spyFindOneByIdFromFakeUserRepository).toHaveBeenCalledWith(
			newPost.userId,
		)
	})
})
