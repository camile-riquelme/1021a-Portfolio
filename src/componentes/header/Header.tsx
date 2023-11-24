import './Header.css'
import Link from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div>
                <h1>Camile Vitória Padilha Riquelme</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Filmes'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header