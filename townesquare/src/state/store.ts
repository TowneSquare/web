
import create  from 'zustand';
import { Post } from '../types/post';

export type FetchError = {
  postError: string | null;
  nftError: string | null;
}

type State = {
    posts: Array<Post>,
  errors: FetchError,
  setErrors: (errors: FetchError) => void,
}


const useStore = create<State>((set) => ({
    posts: [],
  errors: {
    postError: null,
    nftError: null,
  },
  setErrors: (errors: FetchError) => set((state)=> ({
    errors: state.errors = errors
  }))

}))

export default useStore;