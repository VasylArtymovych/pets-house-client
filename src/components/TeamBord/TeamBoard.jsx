import CardMember from './CardMember';
import styleBord from './TeamBoard.module.scss';
import { arr } from './team.js';

const TeamBoard = ({ isOpen }) => {
  return (
    // <div className={styleBord.body}>
      <div className={styleBord.bodyBord} onClick={() => isOpen((prev) => !prev)}>
        {arr.map((el) => (
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
    // </div>
  );
};

export default TeamBoard;
