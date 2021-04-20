import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR, { mutate } from 'swr'
import Head from 'next/head'
import styles from '../styles/animas.module.css'
import Navbar from "../components/navbar";

const URL = "http://localhost/api/animas";
const URL2 = "http://localhost/api/purchase";

const fetcher = url => axios.get(url).then(res => res.data)

const SWR2 = () => {
    const [animas, setAnimas] = useState({ list: [{ id: 1, type: 'ชาไทย', age: 1, weight: 5, price: 2000 },] })
    const [anima, setAnima] = useState({})
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [style, setStyle] = useState(0)
    const [like, setLike] = useState(0)
    const [reviews, setReviews] = useState(0)
    const [score, setScore] = useState(0)
    const [imageurl, setImageurl] = useState(0)
    const [income, setIncome] = useState(0)
  //  const { data } = useSWR(URL, fetcher)
    //const { data } = useSWR(URL2, fetcher)


    useEffect(() => { getAnimas() }, [])

    const getAnimas = async () => {
        let animas = await axios.get(URL)
        setAnimas(animas.data)
        //console.log('Anima:', animas.data)
    }
    const buyAnima = async (id) => {
        const result = await axios.delete(`${URL2}/${id}`)
        console.log(result.data)
        getAnimas()
    }


    const printAnimas = () => {
        if (animas && animas.length)
            return animas.map((anima, index) =>
                <li className={styles.listItem} key={index}>                
                    <h6>Id:{(anima) ? anima.id : 0}</h6>
                    <img src={anima.imageurl} alt="Trulli" width="500" height="333"></img>
                    <h6>Name:{(anima) ? anima.name : '-'}</h6>
                    <h6>Style:{(anima) ? anima.style : 0}</h6>
                    <h6>Like:{(anima) ? anima.like : 0}</h6>
                    <h6>Reviews:{(anima) ? anima.reviews : 0}</h6>
                    <h6>Score:{(anima) ? anima.score : 0}</h6>

                    <button onClick={() => buyAnima(anima.id)} className={styles.byttonupdate} >เก็บไว้</button>
                </li>
            )
        else
            return <li> No Anima</li>
    }
    return (<div className={styles.container}>
        <Navbar />
        <h1>Anime story</h1>
        <ul className={styles.list} >{printAnimas()}</ul>
    </div>
    )

}

export default SWR2

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}