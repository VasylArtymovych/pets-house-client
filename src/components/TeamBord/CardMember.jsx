import GitHubIcon from '@mui/icons-material/GitHub';
import Skeleton from '@mui/material/Skeleton';

const CardMember = ({ styleProp, title, parg, alt, image, name, desc, price, git }) => {
  return (
    <div className={styleProp.poster}>
      <h1 className={styleProp.title}>{title}</h1>
      <p className="subheading">{parg}</p>
      {styleProp.mugshot ? <img className={styleProp.mugshot} src={image} alt={alt} /> : <Skeleton />}

      <p className="name">{name}</p>
      <p className="description">{desc}</p>
      <h2>Reward</h2>
      <div id="price">{price}</div>
      <a className={styleProp.sociale} href={git} target={'_blanc'}>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default CardMember;
