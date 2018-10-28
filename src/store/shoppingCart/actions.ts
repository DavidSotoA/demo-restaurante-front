import { action } from 'typesafe-actions';
import { ShoppingCartTypes, Item } from './types';

export const addItem = (item: Item) => action(ShoppingCartTypes.ADD_ITEM, item);