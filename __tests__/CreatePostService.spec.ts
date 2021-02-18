import { CreatePostService } from '../src/data/post/services/CreatePostService'
import { FakeUserRepository } from '../src/infra/repository/fakes/FakeUserRepository'
import { FakePostRepository } from '../src/infra/repository/fakes/FakePostRepository'

let fakePostRepository: FakePostRepository
let fakeUserRepository: FakeUserRepository
let createPostService: CreatePostService
let spyFindOneByIdFromFakeUserRepository: jest.SpyInstance

describe('Create User Service', () => {
	beforeAll(() => {
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
})
