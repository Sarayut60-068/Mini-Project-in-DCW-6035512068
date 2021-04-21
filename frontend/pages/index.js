import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home({ token }) { 

 
  return (
    <Layout >
    <Head>
        <title>First Page</title>
    </Head>
    <div >
      <div>
    <div className={styles.containerbackH}>
    <Navbar />
        <div  className={styles.dyo}>
        <h1>สวัสดีชาว Anime </h1>
        ถ้าคุณไม่รู้ว่าจะใช้ดูเรื่องอะไร เชิญมาดูรีวิวของเราได้เลย และถ้าคุณสนใจเรื่องไหนก็ กดไอคอน ข้างล่างไปดูได้เลย
        </div>
        <div>
          <a href="https://www.anime-sugoi.com/index.html">
          <img  src="https://i.pinimg.com/favicons/b02966ad391aa0303eab350702614139804ff7bab750c358d8349d30.ico?f93935749ea0e87e2a43beb4326180e9"  width="90" height="60" ></img></a>

          <a href="https://www.animesiam.com/">
          <img  src="https://pbs.twimg.com/profile_images/308822752/logoanime_400x400.png"  width="90" height="60" ></img></a>

          <a href="https://www.animehdzeroo.com/">
          <img  src="https://i.pinimg.com/originals/79/25/ac/7925ac8f53eec7b0b016dbb23106bd78.png"  width="90" height="60" ></img></a>

          <a href="https://www.cartoonsubthai.com/">
          <img  src="https://www.cartoonsubthai.com/logo.png"  width="90" height="60" ></img></a>

        </div>
        </div>
        
    </div>
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
