import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { UserEntityTypeORM } from './UserEntityTypeORM'

@Entity('post')
export class PostEntityTypeORM {
	@PrimaryGeneratedColumn()
	id: number

	@Column('int')
	userId: number

	@ManyToOne(() => UserEntityTypeORM)
	@JoinColumn({ name: 'userId' })
	user: UserEntityTypeORM

	@Column()
	title: string

	@Column()
	body: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}
