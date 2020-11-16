import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import sampleCompanies from './placeholderCompanies'

export interface Achievement {
  name: string,
  description?: string,
  toDo: number,
  done: number,
  showPercentage?: boolean
}

export interface Company {
  name: string,
  description?: string,
  achievements: Achievement[]
}

interface UserState {
  companies: Company[],
  currentlySelected: Company;
}

const initialState: UserState = {
  companies: sampleCompanies,
  get currentlySelected() {
    return this.companies[0]
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectCompany(state, action) {
      state.currentlySelected = action.payload;
    },
  },
});

export const { selectCompany } = userSlice.actions;
export const companyList = (state: RootState) => state.user.companies;
export const currentlySelected = (state: RootState) => state.user.currentlySelected;
export default userSlice.reducer;
