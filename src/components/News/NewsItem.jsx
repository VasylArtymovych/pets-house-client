import scss from './News.module.scss'

export const NewsItem = ({ url, title, description, date}) => {
    return (
        <li className={scss.item}>
            <h3 className={scss.titleList}>{title}</h3>
            <p className={scss.dataNews}>{description}</p>
            <div className={scss.dateAndLink}>
            <p className={scss.dateNews}>{date}</p>
            <a href={url} className={scss.linkNews} target="_blank" rel="noreferrer noopener">Read more</a>
            </div>
        </li>
    )
}


export default NewsItem;