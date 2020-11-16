import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID kPMICG1vKAU0C0orlbVeajUAUiFb4S2EBma7xSSI9Fw',
  },
})