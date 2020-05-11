import {Entity, PrimaryGeneratedColumn, OneToMany, Column, OneToOne, JoinColumn} from "typeorm";
import { Offer } from "./Offer";
import { OrderItem } from "./OrderItem";
import { OrderStatus } from "./OrderStatus";

@Entity()
export class Order {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @OneToOne(type => OrderStatus)
    @JoinColumn()
    orderStatus: OrderStatus;

    @OneToMany(type => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[];
}
