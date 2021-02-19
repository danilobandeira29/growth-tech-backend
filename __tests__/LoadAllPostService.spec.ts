import { LoadAllPostService } from '../src/data/post/services/LoadAllPostService'
import { FakeLoadAllPostRepository } from '../src/infra/repository/fakes/FakeLoadAllPostRepository'

let fakeLoadAllPostRepository: FakeLoadAllPostRepository
let loadAllPostService: LoadAllPostService
let spyFindAllFromFakeLoadAllPostRepository: jest.SpyInstance

describe('Load All Post Service', () => {
	beforeEach(() => {
		fakeLoadAllPostRepository = new FakeLoadAllPostRepository()
		loadAllPostService = new LoadAllPostService(fakeLoadAllPostRepository)
		spyFindAllFromFakeLoadAllPostRepository = jest.spyOn(
			fakeLoadAllPostRepository,
			'findAll',
		)
	})
	it('should be able to load all post', async () => {
		const allPost = [
			{
				id: 1,
				userId: 10,
				user: {
					name: 'Danilo Bandeira',
					company: {
						name: 'My company',
					},
				},
				title: 'Hello, world',
				body: 'Olaaaa',
			},
			{
				id: 2,
				userId: 10,
				user: {
					name: 'Danilo Bandeira',
					company: {
						name: 'My company',
					},
				},
				title: 'Hello, world',
				body: 'Olá, mundo!!',
			},
		]

		const allPostResponse = await loadAllPostService.execute()

		expect(allPostResponse).toMatchObject(allPost)
		expect(spyFindAllFromFakeLoadAllPostRepository).toHaveBeenCalledTimes(1)
	})
})
