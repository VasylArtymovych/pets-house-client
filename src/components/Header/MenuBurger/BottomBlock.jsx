import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const link = [
  { to: '/news', text: 'News' },
  { to: '/notices', text: 'Find pet' },
  { to: '/friends', text: 'Our friend' }
];

const BottomBlock = ({ styleProp, isOpen }) => {
  const variant = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5
      }
    }),
    hidden: {
      opacity: 0,
      y: 100
    }
  };

  let location = useLocation();

  return (
    <div className={styleProp.styleNavigation.navigationLinkWrapperMenuBurger}>
      {link.map((el, i) => (
        <motion.div
          key={Math.random()}
          className={
            location.pathname === el.to
              ? `${styleProp.styleNavigation.active} ${styleProp.styleNavigation.navigationLinkMenuBurger}`
              : styleProp.styleNavigation.navigationLinkMenuBurger
          }
          variants={variant}
          initial="hidden"
          animate="visible"
          custom={i}
          onClick={() => isOpen((prev) => !prev)}
        >
          <NavLink to={el.to}>
            <span>{el.text}</span>
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default BottomBlock;
