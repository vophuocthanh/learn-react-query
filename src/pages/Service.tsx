import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Service: React.FC = () => {
  const fetchProfile = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('res:', res)
    return res.data
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: fetchProfile,
    refetchOnWindowFocus: false,
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error</div>
  }
  return (
    <div>
      <h1>User Profile</h1>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Service
