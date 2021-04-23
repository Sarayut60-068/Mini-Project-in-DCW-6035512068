import Link from 'next/link'
import styles from '../styles/Menubar.module.css'
// import styles from '../styles/Dropdown.module.css'


const Navbar = () => (

    <div >
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        {/* <div class="navbar navbar-expand-lg fixed-top navbar-light bg-light"> */}
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top ">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="active" href="/"><a class="btn btn-outline-success" type="submit"> Home </a></Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li class="nav-item">
                        <Link href="/profile"><a class="nav-link active"> Profile </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/foo"><a class="nav-link active"> Foo </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/animas"><a class="nav-link active"> Anime </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/showlke"><a class="nav-link active"> MyAnimeLibrary </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/admin"><a class="nav-link active"> Admin </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/getConfig"><a class="nav-link active"> Config </a></Link>
                    </li>
                    {/* <li class="nav-item">
                        <Link href="/search"><a class="nav-link active"> search </a></Link>
                    </li> */}


                    <li class="nav-item">
                        <div className={styles.dropdown}>
                            <span>
                                <a class="nav-link active">ระบบ</a>
                            </span>
                            <div className={styles.content}>
                                <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/register">Register</a></p>
                                <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/login">Login</a></p>
                                <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/logout">Logout</a></p>

                            </div>
                        </div>
                    </li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


           

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-sm btn-outline-secondary" type="button">Search</button>
                    </form>

                    



                </ul>
            </div>
        </nav>

        {/* </div> */}
    </div>

)

export default Navbar

