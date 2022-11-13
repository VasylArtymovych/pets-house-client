export const NewItem = ({ info }) => {
    return (
        info.map(el => (
            <li key={el.url}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p>{el.date}</p>
                <a href={el.url}>Read more</a>
            </li>
        ))
    )
}