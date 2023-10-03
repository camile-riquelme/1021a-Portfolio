import { Link } from 'react-router-dom'
type LinkProps ={
    url:string,
    texto:string
}

function LinkNav(props:LinkProps){
    return(
        <Link to={props.url}>{props.texto}</Link>
        // <a href={props.url}>{props.texto}</a>
    )
}
export default LinkNav