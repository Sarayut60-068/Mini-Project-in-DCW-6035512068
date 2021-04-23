import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR, { mutate } from 'swr'
import Head from 'next/head'
import styles from '../styles/animas.module.css'
import Navbar from "../components/navbar";

const URL = "http://localhost/api/animas";
const fetcher = url => axios.get(url).then(res => res.data)
const search = () => {
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


    //  myFunction(() => {  getAnimas() }, [])
    //     // Declare variables
    //     var input, filter, ul, li, a, i, txtValue;
    //     input = document.getElementById('myInput');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("myUL");
    //     li = ul.getElementsByTagName('li');

    //     // Loop through all list items, and hide those who don't match the search query
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    


    return (
        <div className={styles.container}>
            <Navbar />
            <h2>My Phonebook</h2>

            <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Search</h2>
        <Search />
      </section>
        </div>
    )
}

export default search

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
