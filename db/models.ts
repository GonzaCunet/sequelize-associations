import { User } from "./users";
import { Product } from "./products";

User.hasMany(Product);
Product.belongsTo(User);

export { User, Product };
