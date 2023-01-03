import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';

const link = [
  { to: '/news', text: 'news', id: 1 },
  { to: '/notices', text: 'Find pet', id: 2 },
  { to: '/friends', text: 'Friends', id: 3 }
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
          key={el.id}
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
          {}
          <NavLink to={el.to}>
            <Trans i18nKey={`${el.text}`}>
              <span>{el.text}</span>
            </Trans>
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default BottomBlock;
