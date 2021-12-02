import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Count } from "./count";

@Entity()
export class User {

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Count, count => count.user)
    count: Count[];

}
