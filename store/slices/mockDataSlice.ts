import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api as apiClient} from '@/layers/data/api';
import { User } from '@/types/user';


type InitialState = {
  error: string | null | undefined;
  data: Array<User>;
  loading: boolean
};


const initialState: InitialState = {
  error: null,
  data: [],
  loading: false
};

// Async Thunks
export const fetchMockData = createAsyncThunk('mockdata', async () => {
  const response = await apiClient.get<Array<User>>('/elements');
  return response;
});


const mockFetchSlice = createSlice({
  name: 'mockFetchSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMockData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMockData.fulfilled, (state, action) => {
         state.data = action.payload.data ?? []
         state.loading = false
      })
      .addCase(fetchMockData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      })
  },
});

//thunk actions
export const {} = mockFetchSlice.actions;

export default mockFetchSlice.reducer;
