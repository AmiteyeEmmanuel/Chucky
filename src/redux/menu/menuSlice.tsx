import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuList, MenuList1, MenuList2,  } from '../../components/data/menu_data';

// Define types
interface Menu {
  id: any;
  name: string;
  price: string;
  served: string;
  category: string,
  image?: string | null;
}

interface MenuListState {
  menus: Menu [];
}

// Initial states
const initialMenuState: MenuListState = { menus: MenuList };
const initialMenu1State: MenuListState = { menus: MenuList1 };
const initialMenu2State: MenuListState = { menus: MenuList2 };

// Slice for MenuList
const addMenuSlice = createSlice({
  name: 'menus',
  initialState: initialMenuState,
  reducers: {
    addMenu: (state, action: PayloadAction<Menu>) => {
      state.menus.push(action.payload);
    },
    updateMenu: (state, action: PayloadAction<Menu>) => {
      const index = state.menus.findIndex(
        (menu) => menu.id === action.payload.id
      );
      if (index !== -1) {
        state.menus[index] = action.payload;
      }
    },
    deleteMenu: (state, action: PayloadAction<any>) => {
      const { id } = action.payload; 
      state.menus = state.menus.filter(
        (menu) => menu.id !== id
      ); 
    },
  },
});

// Slice for MenuList1
const addMenuSlice1 = createSlice({
    name: 'menus',
    initialState: initialMenu1State,
    reducers: {
      addMenu1: (state, action: PayloadAction<Menu>) => {
        state.menus.push(action.payload);
      },
      updateMenu1: (state, action: PayloadAction<Menu>) => {
        const index = state.menus.findIndex(
          (menu) => menu.id === action.payload.id
        );
        if (index !== -1) {
          state.menus[index] = action.payload;
        }
      },
      deleteMenu1: (state, action: PayloadAction<any>) => {
        const { id } = action.payload; 
        state.menus = state.menus.filter(
          (menu) => menu.id !== id
        ); 
      },
    },
  });

// Slice for MenuList2
const addMenuSlice2 = createSlice({
  name: 'menus',
  initialState: initialMenu2State,
  reducers: {
    addMenu2: (state, action: PayloadAction<Menu>) => {
      state.menus.push(action.payload);
    },
    updateMenu2: (state, action: PayloadAction<Menu>) => {
      const index = state.menus.findIndex(
        (menu) => menu.id === action.payload.id
      );
      if (index !== -1) {
        state.menus[index] = action.payload;
      }
    },
    deleteMenu2: (state, action: PayloadAction<any>) => {
      const { id } = action.payload; 
      state.menus = state.menus.filter(
        (menu) => menu.id !== id
      ); 
    },
  },
});

// Export actions and reducers
export const { addMenu, deleteMenu, updateMenu } = addMenuSlice.actions;
export const { addMenu1, deleteMenu1, updateMenu1 } = addMenuSlice1.actions;
export const { addMenu2, deleteMenu2, updateMenu2 } = addMenuSlice2.actions;
export const addMenuReducer = addMenuSlice.reducer;
export const addMenu1Reducer = addMenuSlice1.reducer;
export const addMenu2Reducer = addMenuSlice2.reducer;
