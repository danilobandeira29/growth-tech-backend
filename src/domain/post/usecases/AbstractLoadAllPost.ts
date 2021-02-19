import { Post } from './AbstractCreatePost'

export interface AbstractLoadAllPost {
	execute(): Promise<Post[]>
}
