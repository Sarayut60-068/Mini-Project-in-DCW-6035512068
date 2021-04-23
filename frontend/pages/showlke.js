import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR, { mutate } from 'swr'
import Head from 'next/head'
import styles from '../styles/animas.module.css'
import Navbar from "../components/navbar";
import withAuth from "../components/withAuth";

const URL = "http://localhost/api/animas";
const URL2 = "http://localhost/api/dislike";
const fetcher = url => axios.get(url).then(res => res.data)

const SWR3 = () => {
    const [animas, setAnimas] = useState({ list: [{ id: 1, name: 'ONE PIECE', style: 'ผจญภัย, แฟนตาซี, ต่อสู้ ', like: 1, reviews: "Good animas see many time", score: 9, imageurl: "https://i.pinimg.com/474x/0e/c8/4b/0ec84b0d13ef5b3dfe7d10b3bfee9a05.jpg" },] })
    const [anima, setAnima] = useState({})
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [style, setStyle] = useState('')
    const [like, setLike] = useState(0)
    const [reviews, setReviews] = useState('')
    const [score, setScore] = useState(0)
    const [imageurl, setImageurl] = useState('')
    // const [income, setIncome] = useState(0)

    useEffect(() => { getAnimas() }, [])
    const getAnimas = async () => {
        let animas = await axios.get(URL)
        setAnimas(animas.data)
        //console.log('Anima:', animas.data)
    }


    console.log("------", animas);
    const printAnimas = () => {
        if (animas && animas.length) {
            animas.map((anima, index) => {
                if (anima.like === 1) {
                    console.log(anima.id)
                    return (
                        <li className={styles.listItem} key={index}>
                            <h6>Id:{(anima) ? anima.id : 0}</h6>
                            <img src={anima.imageurl} alt="Trulli" width="500" height="333"></img>
                            <h6>Name:{(anima) ? anima.name : '-'}</h6>
                            <h6>Style:{(anima) ? anima.style : '-'}</h6>
                            <h6>Like:{(anima) ? anima.like : 0}</h6>
                            <h6>Reviews:{(anima) ? anima.reviews : '-'}</h6>
                            <h6>Score:{(anima) ? anima.score : 0}</h6>
                        </li>
                    )
                }
            }
            )
        }

    }



//     router.route('/like/:animas_id')
//     .put((req, res) => {
//     const animas_id = req.params.animas_id
//     const id = animas.list.findIndex(item => +item.id === +animas_id)
//     animas.list[id].like = 1
//     res.json(animas.list)

   
// })

//     router.route('/dislike/:animas_id')
//     .put((req, res) => {
//     const animas_id = req.params.animas_id
//     const id = animas.list.findIndex(item => +item.id === +animas_id)
//     animas.list[id].like = 0
//     res.json(animas.list)
   
// })
// useEffect(() => { getAnimas() }, [])

// const getAnimas = async () => {
//     let animas = await axios.get(URL)
//     setAnimas(animas.data)
//     //console.log('Anima:', animas.data)
// }
const disbuyAnima = async (id) => {
    const result = await axios.put(`${URL2}/${id}`,{id,like})
    console.log(result.data)
    getAnimas()
}


    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.list}>
                {!animas.list ? animas.map((anime, key) => {
                    if(anime.like===1)
                    return (
                        <li className={styles.listItem} key={key}>
                            <h6>Id : {anime.id}</h6>
                            <img src={anime.imageurl} alt="Trulli" width="500" height="333"></img>
                            <h6>Name : {anime.name}</h6>
                            <h6>Style : {anime.style}</h6>
                            <h6>Like : {anime.like}</h6>
                            <h6>Reviews : {anime.reviews}</h6>
                            <h6>Score : {anime.score}</h6>
                        
                            <button onClick={() => disbuyAnima(anime.id)} className={styles.byttonupdate} >ลบออกจากคลัง</button>

                        </li>
                    )
                }) : 'No data'}
            </div>
            <ul className={styles.list} >

                
            </ul>
        </div>
    )
}


export default withAuth(SWR3);

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
