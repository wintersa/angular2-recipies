import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";

export let RECIPES:Recipe[] = [
    new Recipe('Wiener Schnitzel',
               'A german dissapointment',
               'http://www.thehoffmann.us/schnitzel.jpg',
                  [
                    new Ingredient('Pork Meat', 1),
                    new Ingredient('French Fries', 2),
                    new Ingredient('Large Salad', 1),
                  ]
              ),
    new Recipe('Loemia from ShinShin',
               'Tastiest invention from China',
               'http://www.zelfmaakrecepten.nl/wp-content/uploads/2012/02/loempia.jpg',
                  [
                    new Ingredient('Sate sauce', 2),
                    new Ingredient('Rice', 1),
                    new Ingredient('Pisang Goreng', 4),
                  ]
              ),
    new Recipe('A Tasty mess Monkey',
               'Something messy but so tasty',
               'https://ladyfangtasia.files.wordpress.com/2015/03/supboerenfrites-e1427488227864.jpg',
                  [
                    new Ingredient('Monkey Meat', 1),
                    new Ingredient('Big Fries', 2),
                    new Ingredient('Wet Salad', 11),
                    new Ingredient('Cookie Dough', 2)
                  ]
              )
];
