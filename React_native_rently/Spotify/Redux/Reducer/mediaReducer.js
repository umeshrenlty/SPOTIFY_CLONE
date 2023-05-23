const {set_Media_Play_list} = require('../constant');

const initialState = {
  isLoading: true,
  description: '',
  type: '',
  release_date: '12',
  images: [{url: ''}],
  followers: {total: 0},
  tracks: {
    items: [
      {
        id: '',
        artists: [{name: ''}],
        preview_url: '',
        name: '',
        explicit: false,
        album: {name: '', images: [{url: ''}]},
        duration_ms: 0,
      },
    ],
  },
};
const mediaData = (state = initialState, {type, media}) => {
  console.log(media);
  const playlistTracks = () => {};
  switch (type) {
    case set_Media_Play_list: {
      return {
        ...state,
        isLoading: false,
        description: media.description,
        name: media.name,
        type: media.type,
        followers: media.followers,
        tracks: media.tracks.items.map(track => {
          return {...track, ...track.track};
        }),
      };
    }
    default:
      return state;
  }
};
export default mediaData;
