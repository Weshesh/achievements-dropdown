import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import placeholderCompanies from './placeholderCompanies.json'

interface Achievement {
  name: string,
  description: string,
  toDo: number,
  done: number,
  showPercentage: boolean
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
  companies: [
    {
      name: 'Long Name Is Long OÜ',
      description: 'A company',
      achievements: [
        {
          name: '1To the laundry',
          description: 'Its dirty',
          toDo: 10,
          done: 5,
          showPercentage: true
        },
        {
          name: 'Dont do the laundry',
          description: 'Its dirty',
          toDo: 10,
          done: 5,
          showPercentage: true
        }
      ]
    },
    {
      name: '2 OÜ',
      description: 'A company',
      achievements: [
        {
          name: '12To the laundry',
          description: 'Its dirty',
          toDo: 10,
          done: 5,
          showPercentage: true
        }
      ]
    }
  ],
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
