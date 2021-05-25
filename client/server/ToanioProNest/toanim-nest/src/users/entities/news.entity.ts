import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique,} from 'typeorm';
import { IsEmail, IsOptional} from 'class-validator';

// type NewType = "user"| "admin";

@Entity()
// @Unique(["email"])
export class News extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string|number;

    @Column()
    @Column({ nullable: true })

    about: string;

    @Column()
    @Column({ nullable: true })
    link:string;

    @Column()
    @Column({ nullable: true })
    date?:string;

    // @Column({default:'user'})
    // roll:NewType
}


