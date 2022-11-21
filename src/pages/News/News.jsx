import NewsList  from 'components/News/NewsList';
import FormSearchNews from "components/News/NewsFormSearch";
import { useState } from "react";


function NewsPage() {
const [filterNews, setFilterNews] = useState('');


    return (
        <div>
            <FormSearchNews setFilter={setFilterNews}/>
            <NewsList filter={filterNews}/>
        </div>
    )
};

export default NewsPage;