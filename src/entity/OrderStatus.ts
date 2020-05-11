import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class OrderStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeName: number;
    
}
