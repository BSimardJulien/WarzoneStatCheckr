import Link from 'next/link';

const Navbar = () => (
    // <ul>
    //     <li><Link href="/"><a>Home</a></Link></li>
    //     <li><Link href="/About"><a>About</a></Link></li>
    // </ul>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Wz</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/">
                        <a className="nav-link">Home
          <span className="sr-only">(current)</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link href="/About">
                    <a className="nav-link" >About</a>
                </Link>
                </li>
            </ul>
        </div>
    </nav>

);

export default Navbar;