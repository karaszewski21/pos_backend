import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne} from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column()
    active: boolean;

    @OneToOne(type => Recipe, recipe => recipe.offer)
    recipe: Recipe;
}