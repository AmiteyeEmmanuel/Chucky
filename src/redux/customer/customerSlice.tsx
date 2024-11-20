import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { customerList } from "../../components/data/data";

// Define the Customer type
interface Customer {
  id: any;
  name: string;
  email: string;
  image?: string | null;
}

// Define the state type
interface CustomerState {
  customers: Customer[];
}

// Initial state
const initialState: CustomerState = {
  customers: customerList,
};

// Create the slice
const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex(
        (customer) => customer.id === action.payload.id
      );
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },
    deleteCustomer: (state, action: PayloadAction<any>) => {
      const { id } = action.payload; 
      state.customers = state.customers.filter(
        (customer) => customer.id !== id
      ); 
    },
    
  },
});

// Export the actions and reducer
export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
