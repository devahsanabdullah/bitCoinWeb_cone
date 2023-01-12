import React from 'react'

const NewComponet = () => {
    const [data, setData]=useState()
    useEffect(async() => {
       let data= fetch('https://jsonplaceholder.typicode.com/posts')
       let result = await data.JSON()
       if(result)
       {

           setData(result)
       }
     
    }, [])
  return (
    <div>NewComponet</div>
  )
}

export default NewComponet