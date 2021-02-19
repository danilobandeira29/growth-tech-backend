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
		await loadAllPostService.execute()

		expect(spyFindAllFromFakeLoadAllPostRepository).toHaveBeenCalledTimes(1)
	})
})
