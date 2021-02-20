import 'reflect-metadata'
import express from 'express'
import '../infra/typeORM'
import { PostRepositoryTypeORM } from '../infra/repository/typeORM/PostRepositoryTypeORM'
import { CreatePostService } from '../data/post/services/CreatePostService'
import { CreateUserService } from '../data/user/services/CreateUserService'
import { UserRepositoryTypeORM } from '../infra/repository/typeORM/UserRepositoryTypeORM'

const app = express()

app.use(express.json())

app.post('/user', async (request, response) => {
	const userRequest = request.body

	const userRepository = new UserRepositoryTypeORM()
	const createUserService = new CreateUserService(userRepository)

	const user = await createUserService.execute(userRequest)

	return response.status(200).json(user)
})

app.post('/post', async (request, response) => {
	const postRequest = request.body

	const userRepository = new UserRepositoryTypeORM()
	const postRepository = new PostRepositoryTypeORM()
	const createPostService = new CreatePostService(
		postRepository,
		userRepository,
	)

	const post = await createPostService.execute(postRequest)

	return response.status(200).json(post)
})

app.listen(3000, () => console.log('Server started at http://localhost:3000'))
