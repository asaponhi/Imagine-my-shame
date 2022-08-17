
import { useBody,useCookies, useQuery,createApp } from 'h3'
const app = createApp()

export default async (req, res) => {
  console.log("req",req)
  console.log("res",res)
  const query = useQuery(req)
  const body = await useBody(req) // only for POST request
  const cookies = useCookies(req)
  
  return { query, body, cookies }
}