import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("double")
    amount: number;

    @Column()
    quantity: number;

    @Column()
    active: boolean;

    @OneToMany(type => Recipe, recipe => recipe.product)
    recipe: Recipe[];
}