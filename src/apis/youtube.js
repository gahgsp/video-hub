import axios from 'axios';

const KEY = 'AIzaSyADAv8drFxDohlwtt4v37L1iNAmbJqodfM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 5,
  },
});
