import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany, OneToOne} from "typeorm";
import { Product } from "./Product";
import { Offer } from "./Offer";
import { RecipeItem } from "./RecipeItem";

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string = '';

    @Column()
    description: string;

    @OneToMany(type => RecipeItem, recipeItem => recipeItem.recipe)
    recipeItems: RecipeItem[];
    @OneToOne(type => Offer, offer => offer.recipe)
    offer: Offer;
}