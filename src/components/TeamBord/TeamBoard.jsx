import CardMember from './CardMember';
import styleBord from './TeamBoard.module.scss';
import { arr } from './team.js';

// const arr = [
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'first',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 's',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'd',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'f',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'g',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'h',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'j',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'k',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'l',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'y',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 't',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'r',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'e',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   },
//   {
//     title: 'WANTED by IT companies',
//     par: 'Dead or Alive',
//     img: 'https://i.imgur.com/p8eOzMe.png',
//     alt: '',
//     name: 'last',
//     desccription: 'Armed & very dangerous',
//     price: '$50.000'
//   }
// ];

const TeamBoard = () => {
  return (
    <div className={styleBord.bodyBord}>
      {arr.map((el) => (
        // <div className={styleBord.poster}>
        //   <h1 className={styleBord.title}>{el.title}</h1>
        //   <p className="subheading">{el.par}</p>
        //   <img className={styleBord.mugshot} src={el.img} alt="t" />
        //   <p className="name">{el.name}</p>
        //   <p className="description">{el.desccription}</p>
        //   <h2>Reward</h2>
        //   <div id="price">{el.price}</div>
        // </div>
        <CardMember
          styleProp={styleBord}
          title={el.title}
          parg={el.par}
          alt={el.alt}
          image={el.img}
          name={el.name}
          desc={el.desccription}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default TeamBoard;
