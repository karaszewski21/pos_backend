import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinColumn} from "typeorm";
import { Order } from "./Order";
import { Offer } from "./Offer";
import { OrderStatus } from "./OrderStatus";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;
    
    @OneToOne(type => OrderStatus)
    @JoinColumn()
    orderStatus: OrderStatus;

    @OneToOne(type => Offer)
    @JoinColumn()
    offer: Offer;

    @ManyToOne(type => Order, order => order.orderItems)
    order: Order;
}
