import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface Achievement {
  name: string,
  description: string,
  toDo: number,
  done: number,
  showPercentage: boolean
}

interface Company {
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
      name: 'OÜ',
      description: 'A company',
      achievements: [
        {
          name: 'To the laundry',
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
    /*
    selectCompany: (state, payload: Company) => {
      state.currentlySelected = payload;
    },
    */
  },
});

// export const { selectCompany } = userSlice.actions;
export const companyList = (state: RootState) => state.user.companies;
export const currentlySelected = (state: RootState) => state.user.currentlySelected;
export default userSlice.reducer;
