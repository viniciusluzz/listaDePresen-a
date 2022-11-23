import './style.css';

export function List(props){
    return(
        <div className='container'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}