import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedFavorites: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addSelectedFavorite: (state, action) => {
            const newProduct = action.payload.product;
            state.selectedFavorites = state.selectedFavorites.concat({
                product: newProduct,
            });
        },
        removeSelectedFavorite: (state, action) => {
            const productIdToRemove = action.payload.product.id;
            state.selectedFavorites = state.selectedFavorites.filter(
                (favorite) => favorite.product.id !== productIdToRemove
            );
        },
    },
});
