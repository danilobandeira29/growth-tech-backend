import { Router, Request, Response } from 'express'
import { LoadAllPostService } from '../../data/post/services/LoadAllPostService'
import { LoadAllPostRepositoryTypeORM } from '../../infra/repository/typeORM/LoadAllPostRepositoryTypeORM'
import { PostIndexController } from '../../controllers/PostIndexController'

export const postRouter = Router()

postRouter.get('/', async (request: Request, response: Response) => {
	const loadAllPostRepository = new LoadAllPostRepositoryTypeORM()
	const loadAllPostService = new LoadAllPostService(loadAllPostRepository)
	const postIndexController = new PostIndexController(loadAllPostService)

	const { data, statusCode } = await postIndexController.index()

	return response.status(statusCode).json(data)
})
