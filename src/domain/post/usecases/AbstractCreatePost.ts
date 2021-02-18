import { PostEntity } from '../entity/PostEntity'

export interface Post extends PostEntity {
	id: number
}

export interface AbstractCreatePost {
	execute(data: PostEntity): Promise<Post>
}
