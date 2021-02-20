import { Router, Request, Response } from 'express'
import { UserController } from '../../controllers/UserController'
import { CreateUserService } from '../../data/user/services/CreateUserService'
import { UserRepositoryTypeORM } from '../../infra/repository/typeORM/UserRepositoryTypeORM'
import { CreatePostService } from '../../data/post/services/CreatePostService'
import { PostRepositoryTypeORM } from '../../infra/repository/typeORM/PostRepositoryTypeORM'
import { PostController } from '../../controllers/PostController'

export const userRouter = Router()

userRouter.post('/', async (request: Request, response: Response) => {
	const userRepository = new UserRepositoryTypeORM()
	const createUserService = new CreateUserService(userRepository)
	const userController = new UserController(createUserService)

	const { data, statusCode } = await userController.create(request)

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
		const postController = new PostController(createPostService)

		const { data, statusCode } = await postController.create(request)

		return response.status(statusCode).json(data)
	},
)
