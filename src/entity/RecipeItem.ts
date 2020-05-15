import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Product } from "./Product";
import { Offer } from "./Offer";
import { Recipe } from "./Recipe";

@Entity()
export class RecipeItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("double")
    amount_portion: number;

    @ManyToOne(type => Recipe, recipe => recipe.recipeItems)
    @JoinTable()
    recipe: Recipe;

    @ManyToOne(type => Product, product => product.recipeItems)
    @JoinTable()
    product: Product;    
}