import React from 'react'
import NavLink from './NavLink';

// const MenuOverlay = ({ links }) => {
//   return (
//     <ul className="flex flex-col py-4 items-center">{links.map((link, index) => (
//       <li key={index}>
//             <NavLink href={link.path} title={link.title} />
//       </li>
// ))}
//     </ul>
//     );
// };
// export default MenuOverlay;


const MenuOverlay = ({ links }) => {
  if (!links || !Array.isArray(links)) {
    return null; // or some other fallback UI
  }

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
