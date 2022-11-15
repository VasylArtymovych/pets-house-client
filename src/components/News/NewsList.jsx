import { NewsItem } from './NewsItem.jsx';
import scss from './News.module.scss'

export const NewsList = ({ info }) => {
    return (
        <ul className={scss.newsList}>
            {info.map(({ url, title, description, date, linkNews}) => {
                    return (
                        <NewsItem
                            key={url}
                            url={url}
                            title={title}
                            description={description}
                            date={date}
                        />
                    )
                }
                )
            }
        </ul>
    )
};

export default NewsList;