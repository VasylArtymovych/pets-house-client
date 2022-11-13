export const FriendItem = ({friend}) => {
   return (
        friend.map(el => (
            <li key={el.url}>
                <h3>{el.title}</h3>
                <img src={el.imageUrl} alt="Sponsor Logo" width="120px" />
                <div>
                    <ul>
                        <li>
                            <button>isOpen</button>
                        </li>
                        <li>
                            <address>
                                <a href={el.addressUrl}>{ el.address}</a>
                            </address>
                        </li>
                        <li>
                            <a href={el.email}>{ el.email}</a>
                        </li>
                        <li>
                            <a href={el.phone}>{ el.phone}</a>
                        </li>
                    </ul>
                </div>
            </li>
        ))
    )
    
}