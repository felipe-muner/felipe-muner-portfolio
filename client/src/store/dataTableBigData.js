import photos from "../../fakeDB/photos";

console.log(photos);

export default {
  namespace: true,
  state: {
    photos
  },
  getters: {
    getPhotos: state => {
      return state.photos;
    }
  },
  mutations: {},
  actions: {}
};
