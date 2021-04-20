import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/admin.module.css'
//import useSWR, { mutate } from 'swr'
import Navbar from "../components/navbar";
import withAuth from "../components/withAuth";


const URL = "http://localhost/api/animas";
const URL2 = "http://localhost/api/income";


const fetcher = url => axios.get(url).then(res => res.data)
const SWR1 = () => {
    const [animas, setAnimas] = useState({ list: [{  id: 1, name: 'ONE PIECE', style: 'ผจญภัย, แฟนตาซี, ต่อสู้ ',like: 1 ,reviews:"Good animas see many time", score:9,imageurl:"https://i.pinimg.com/474x/0e/c8/4b/0ec84b0d13ef5b3dfe7d10b3bfee9a05.jpg" },] })
    const [anima, setAnima] = useState({})
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [style, setStyle] = useState(0)
    const [like, setLike] = useState(0)
    const [reviews, setReviews] = useState(0)
    const [score, setScore] = useState(0)
    const [imageurl, setImageurl] = useState(0)
    const [income, setIncome] = useState(0)
    //const { data } = useSWR(URL, URL2, fetcher)


    useEffect(() => {
        getAnimas();
        getIncome();
        profileUser();
      }, []);

    const profileUser = async () => {
        try {
          // console.log('token: ', token)
          const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // console.log('user: ', users.data)
          setUser(users.data);
        } catch (e) {
          console.log(e);
        }
      };
    
    const getAnimas = async () => {
        let animas = await axios.get(URL)
        setAnimas(animas.data)
        //console.log('Anima:',animas.data)
    }
    const getIncome = async () => {
        let income = await axios.get(URL2)
        setIncome(income.data)
        //console.log('income:', income.data)
    }

    const getAnima = async (id) => {
        let anima = await axios.get(`${URL}/${id}`)
        console.log('bear id: ', anima.data)
        setAnima({ id: anima.data.id, name: anima.data.name, like: anima.data.like, style: anima.data.style, reviews: anima.data.reviews, score:anima.data.score, imageurl:anima.data.imageurl })
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
                    <button className={styles.byttondelet} onClick={() => deleteAnima(anima.id)} >Delete</button>
                    <button className={styles.byttonget} onClick={() => getanima(anima.id)}>Get</button>
                    <button className={styles.byttonupdate} onClick={() => updateAnima(anima.id)}>Update</button>
                </li>
            )
        else
            return <li> No Anima</li>
    }

    const printIncome = () => {
        return income
    }


    const addAnima = async (name, style, like, reviews, score, imageurl) => {
        let animas = await axios.post(URL, { name, style, like, reviews, score, imageurl })
        setAnimas(animas.data)
    }


    const deleteAnima = async (id) => {
        const result = await axios.delete(`${URL}/${id}`)
        console.log(result.data)
        getaAnimas()
    }

    const updateAnima = async (id) => {
        const result = await axios.put(`${URL}/${id}`, { id, name, style, like, reviews, score, imageurl })
        //console.log('student id update: ', result.data)
        getAnimas()
    }



    return (<div className={styles.container} >
          <Navbar />
        <h1>Admin</h1>
        <h2>Income:{printIncome()}</h2>
        <h2>Anime</h2>
        <ul className={styles.list}  >{printAnimas()}</ul>
        selected Tea: {anima.name} {anima.style} {anima.like} {anima.reviews} {anima.score} {anima.imageurl}
        <h2>Add Tea</h2>
        <ul className={styles.formadd} >
        ImageURL:<input type="text" onChange={(e) => setimageurl(e.target.value)} /> <br />
        Name:<input type="text" onChange={(e) => setName(e.target.value)} /> <br />
        Style:<input type="text" onChange={(e) => setStyle(e.target.value)} /> <br />
        Like:<input type="number" onChange={(e) => setLike(e.target.value)} /> <br />
        Reviews:<input type="text" onChange={(e) => setReviews(e.target.value)} /> <br />
        Score:<input type="number" onChange={(e) => setScore(e.target.value)} /> <br />
            <button className={styles.byttonadd} onClick={() => addAnima(name, style, like, reviews, score)}>Add New story Anime</button>
        </ul>
    </div>
    )
}

export default withAuth(SWR1);

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
  }
