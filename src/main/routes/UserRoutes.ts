import { Router, Request, Response } from 'express'
import { UserCreateController } from '../../controllers/UserCreateController'
import { CreateUserService } from '../../data/user/services/CreateUserService'
import { UserRepositoryTypeORM } from '../../infra/repository/typeORM/UserRepositoryTypeORM'
import { CreatePostService } from '../../data/post/services/CreatePostService'
import { PostRepositoryTypeORM } from '../../infra/repository/typeORM/PostRepositoryTypeORM'
import { PostCreateController } from '../../controllers/PostCreateController'

export const userRouter = Router()

userRouter.post('/', async (request: Request, response: Response) => {
	const userRepository = new UserRepositoryTypeORM()
	const createUserService = new CreateUserService(userRepository)
	const userCreateController = new UserCreateController(createUserService)

	const { data, statusCode } = await userCreateController.create(request)

	return response.status(statusCode).json(data)
})

userRouter.post(
	'/:userId/post',
	async (request: Request, response: Response) => {
		const postRepository = new PostRepositoryTypeORM()
		const userRepository = new UserRepositoryTypeORM()
		const createPostService = new CreatePostService(
			postRepository,
			userRepository,
		)
		const postCreateController = new PostCreateController(createPostService)

		const { data, statusCode } = await postCreateController.create(request)

		return response.status(statusCode).json(data)
	},
)
