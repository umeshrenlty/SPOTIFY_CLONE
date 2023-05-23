const {
  get_playList_media,
  set_Media_Play_list,
  get_Track_Player,
} = require('../constant');

export const getMediaPlaylist = mediaId => {
  return {
    type: get_playList_media,
    mediaId,
  };
};
export const setMediaPlaylist = mediaData => {
  return {
    type: set_Media_Play_list,
    mediaData,
  };
};
export const getTrackPlayer = () => {
  return {
    type: get_Track_Player,
  };
};
