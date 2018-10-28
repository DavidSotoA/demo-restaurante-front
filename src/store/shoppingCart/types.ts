export interface Item {
    name: string,
    items: number,
    price: number
}

export const enum ShoppingCartTypes {
    ADD_ITEM = '@@shoppingCart/ADD_ITEM'
}

export interface ShoppingCartState {
    readonly data: Item[]
}