import { useState, useEffect } from "react";
import axios from 'axios'

const useResources = (resource) => {
  // State for the resources
  const [resources, setResources] = useState([])

  // Like componentDidMount & update: async inside the useEffect
  useEffect(() => {
      (async (resource) => {
        // Make a request to the json api
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    
        setResources(response.data)
      })(resource)

  }, [resource])

  return resources
}

export default useResources