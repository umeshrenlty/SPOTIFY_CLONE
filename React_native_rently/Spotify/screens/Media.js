import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMediaPlaylist} from '../Redux/actions/mediaAction';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, icons} from '../constants';
import MediaHeader from '../components/MediaHeader';
// import MediaHeader from '../components/MediaHeader';

const Media = ({route, navigation}) => {
  const dispatch = useDispatch();
  const mediaData = useSelector(state => state.mediaData);
  const {mediaId, mediaType} = route.params;
  console.log(mediaId, mediaType);
  useEffect(() => {
    if (mediaType === 'playlist') {
      dispatch(getMediaPlaylist(mediaId));
    } else if (mediaType === 'album') {
    } else if (mediaType === 'artist') {
    }
  }, [mediaId, mediaType, dispatch]);
  console.log(mediaData, 8888888);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Image />
      </View>
      {mediaData.isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <View>
          <FlatList
            ListHeaderComponent={
              <MediaHeader
                type={mediaData.type}
                imageUrl={mediaData.images[0].url}
                title={mediaData.name}
                // totalTracks={10}
                mediaDescription={mediaData.description}
                followers={mediaData.followers.total}
                releaseDate={mediaData.release_date}
              />
            }
            ListFooterComponent={<View style={{marginBottom: 250}} />}
            data={mediaData}
            renderItem={() => {
              <Text>hh</Text>;
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Media;

const styles = StyleSheet.create({
  backIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.white,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  container: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.lightGray3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
