import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR, { mutate } from 'swr'
import Head from 'next/head'
import styles from '../styles/animas.module.css'
import Navbar from "../components/navbar";
import withAuth from "../components/withAuth";

const URL = "http://localhost/api/animas";
const URL2 = "http://localhost/api/purchase";

const fetcher = url => axios.get(url).then(res => res.data)

const SWR2 = () => {
    const [animas, setAnimas] = useState({ list: [{ id: 1, name: 'ONE PIECE', style: 'ผจญภัย, แฟนตาซี, ต่อสู้ ',like: 1 ,reviews:"Good animas see many time", score:9,imageurl:"https://i.pinimg.com/474x/0e/c8/4b/0ec84b0d13ef5b3dfe7d10b3bfee9a05.jpg"},] })
    const [anima, setAnima] = useState({})
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [style, setStyle] = useState('')
    const [like, setLike] = useState(0)
    const [reviews, setReviews] = useState('')
    const [score, setScore] = useState(0)
    const [imageurl, setImageurl] = useState('')
    // const [income, setIncome] = useState(0)
  //  const { data } = useSWR(URL, fetcher)
    //const { data } = useSWR(URL2, fetcher)


    useEffect(() => { getAnimas() }, [])

    const getAnimas = async () => {
        let animas = await axios.get(URL)
        setAnimas(animas.data)
        //console.log('Anima:', animas.data)
    }
    const buyAnima = async (id) => {
        const result = await axios.put(`${URL2}/${id}`,{id,like})
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
                    <h6>Style:{(anima) ? anima.style : '-'}</h6>
                    <h6>Like:{(anima) ? anima.like : 0}</h6>
                    <h6>Reviews:{(anima) ? anima.reviews : '-'}</h6>
                    <h6>Score:{(anima) ? anima.score : 0}</h6>

                    <button onClick={() => buyAnima(anima.id)} className={styles.byttonupdate} >เก็บไว้</button>
                </li>
            )
        else
            return <li> No Anima</li>
    }
    return (<div className={styles.container}>
        <Navbar />
        <br/>
        <br/>
        <h1>Anime story</h1>
        <ul className={styles.list} >{printAnimas()}</ul>
    </div>
    )

}

export default withAuth(SWR2);

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}