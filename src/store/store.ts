import create from "zustand";
type Store = {
  feedData:
    | {
        name: string;
        userId: string;
        date: string;
        tweetBody: string;
        imgUrl: string;
      }[]
    | undefined;
  whoTofollowData?:
    | {
        name: string;
        userId: string;
        imgUrl: string;
      }[]
    | undefined;
  whatHappeningData?:
    | {
        name: string;
        tweetsCount: string;
      }[]
    | undefined;
  fetch: (key: "feedData" | "whoTofollowData" | "whatHappeningData", url: string) => void;
};

const useStore = create<Store>()((set) => ({
  feedData: undefined,
  whoTofollowData: undefined,
  whatHappeningData: undefined,
  fetch: async (key, url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => set({ [key]: data }));
    // fetch(url).then((res) => res.json).then((data) => set({ feeddata: data }))
  },
}));

export default useStore;
