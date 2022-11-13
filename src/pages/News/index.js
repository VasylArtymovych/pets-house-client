import NewsInfo from '../../data/news.json';
import { NewsList } from 'components/News/NewsData/NewsList';
import{Hero} from 'components/News/NewsHero/NewsHero'

export default function NewsPage ()  {
    return (
        <div>
            <Hero/>
            <NewsList info={NewsInfo}/>
        </div>
    )
};