
import axios from 'axios'

const KEY = 'AIzaSyAbI_UdJJtI_ZGvuG48cU9dAS7NAin8GCc';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});