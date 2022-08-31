import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '78cf419aa0msh730334fef8b54e4p14e3f3jsn2f634e142c75',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data;
}