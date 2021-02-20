import { Post } from './AbstractCreatePost'
import { User } from '../../user/usecases/CreateUser'

export interface PostWithUser extends Post {
	user: User
}

export interface AbstractLoadAllPost {
	execute(): Promise<PostWithUser[]>
}
