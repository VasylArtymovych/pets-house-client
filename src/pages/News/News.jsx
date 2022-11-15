import NewsInfo from '../../data/news.json';
import NewsList  from 'components/News/NewsList';
import FormSearchNews from "components/News/NewsFormSearch";


function NewsPage ()  {
    return (
        <div>
            <FormSearchNews/>
            <NewsList info={NewsInfo}/>
        </div>
    )
};

export default NewsPage;