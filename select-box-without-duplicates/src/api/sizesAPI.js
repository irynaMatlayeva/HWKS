import axios from 'axios';

const key = 'kick-start'
const url = 'https://next-with-api-orpin.vercel.app/api/kick-start'

export const getSizes = () => {
  return axios
    .get(url, {
      headers: {
        'Authorization': key,
      },
    })
}
