import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTweets, addtweet } from "../../api/tweet";

interface Tweet {
  userId: string;
  name: string;
  tweetId: string;
  content: string;
}

export interface TweetState {
  tweets: Tweet[];
}

const initialState: TweetState = {
  tweets: [],
};

const fetchAllTweets: any = createAsyncThunk(
  "tweet/fetchAllTweets",
  async () => {
    const response = await getAllTweets();
    return response.data;
  }
);

const addtweetAction: any = createAsyncThunk(
  "tweet/addtweet",
  async (data: {
    userId: string;
    name: string;
    tweetId: string;
    content: string;
  }) => {
    const response = await addtweet(data);
    return response.data;
  }
);

export const tweetSlice = createSlice({
  name: "tweetSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTweets.fulfilled, (state, action) => {
      state.tweets = action.payload;
    });
    builder.addCase(addtweetAction.fulfilled, () => {});
  },
});

export { fetchAllTweets, addtweetAction };

export default tweetSlice.reducer;
