import scss from './News.module.scss'

export const NewsItem = ({ url, title, description, date}) => {
    return (
        <li className={scss.item}>
            <h3 className={scss.title}>{title}</h3>
            <p className={scss.dataNews}>{description}</p>
            <p className={scss.dateNews}>{date}</p>
            <a href={url} className={scss.linkNews}>Read more</a>
        </li>
    )
}


export default NewsItem;