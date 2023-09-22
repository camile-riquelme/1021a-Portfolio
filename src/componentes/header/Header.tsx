import './Header.css'
import Link from './../link/Link'
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
                        <Link texto='Projetos'/>
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