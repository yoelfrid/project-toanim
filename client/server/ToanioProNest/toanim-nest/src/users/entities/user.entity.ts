import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique,} from 'typeorm';
import { IsEmail, IsOptional} from 'class-validator';

type NewType = "user"| "admin";

@Entity()
// @Unique(["email"])
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string|number;

    @Column()
    name: string;

    @Column()
    @Column({ nullable: true })
    lastName:string;

    @Column()
    @Column({ nullable: true })
    addres?:string;

    @Column()
    @IsEmail()
    @Column({ nullable: true })
    email:string;

    @Column()
    @Column({ nullable: true })
    password:string;
    
    @Column()
    @Column({ nullable: true })
    about:string

    @Column()
    @Column({ nullable: true })
    img:string

    @Column({default:'user'})
    roll:NewType
}


