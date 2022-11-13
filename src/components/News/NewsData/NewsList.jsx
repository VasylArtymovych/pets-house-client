import { NewItem } from './NewsItem.jsx';

export const NewsList = ({ info }) => {
    return (
        <ul>
            <NewItem info={info} />
        </ul>
    )
};