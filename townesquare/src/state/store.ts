
import create  from 'zustand';
import { Post } from '../types/post';

export type FetchError = {
  postError: string | null;
  nftError: string | null;
}

type State = {
    posts: Array<Post>,
  errors: FetchError,
  isDark: boolean,
  setErrors: (errors: FetchError) => void,
  setIsDark: () => void,
}


const useStore = create<State>((set) => ({
    posts: [],
    isDark: false,
  errors: {
    postError: null,
    nftError: null,
  },
  setErrors: (errors: FetchError) => set((state)=> ({
    errors: state.errors = errors
  })),
  setIsDark: () => set((state) => ({
    isDark: !state.isDark
  }))

}))

export default useStore;