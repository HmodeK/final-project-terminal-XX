export interface CartItem {
    data: {
        quantity: number;
        any_sku: string;
    };
}

export interface CartRequest {
    cart_items: CartItem[];
    skip_collect: number;
}

export const buildCartRequest = (itemId: string, quantity: number): CartRequest => {
    return {
        cart_items: [
            {
                data: {
                    quantity,
                    any_sku: itemId,
                },
            },
        ],
        skip_collect: 1,
    };
};