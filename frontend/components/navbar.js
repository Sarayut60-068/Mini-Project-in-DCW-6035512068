import Link from 'next/link'
import styles from '../styles/Menubar.module.css'


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
                        <Link class="active" href="/"><a class="nav-link active"> Home </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/register"><a class="nav-link active"> Register </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/login"><a class="nav-link active"> Login </a></Link>
                    </li>
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
                        <Link href="/showlke"><a class="nav-link active"> Anime kept my </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/admin"><a class="nav-link active"> Admin </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/getConfig"><a class="nav-link active"> Config </a></Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/logout"><a class="nav-link active"> Logout </a></Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </ul>
            </div>
</nav>

        {/* </div> */}
    </div>

)

export default Navbar

