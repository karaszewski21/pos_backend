import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Product } from "./Product";
import { Offer } from "./Offer";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("double")
    amount_portion: number;

    @ManyToMany(type => Product, product => product.recipe)
    @JoinTable()
    product: Product[];
    
    @ManyToOne(type => Offer, offer => offer.recipe)
    offer: Offer;
}