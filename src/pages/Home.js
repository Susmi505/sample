import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Home() {
    const [data,setData]= useState([])

    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all?fields=name,region,flag').then((response)=>{
            setData(response?.data)
        })
    },[data])
    console.log(data)
  return (
    <div>
        <h1 className="heading center">List of Countires</h1>
        <div  className="countries">
        
        {data?.map((item,i)=>(
            <div key={i} className="listing-country">
                <img class="flag" src={item.flag}/>
                <p>{item.name}</p>
                <p>{item.region}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Home