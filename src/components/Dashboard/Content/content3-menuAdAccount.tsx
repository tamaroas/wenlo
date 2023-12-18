import React from 'react'
import { MenuItem } from '../Menu';
import { BiTransfer } from 'react-icons/bi';
import style from './content3-menuAdAccount.scss'
function MenuAddAccount() {
    const MenuAddAccountList: {
        title?: string;
        icon?: JSX.Element;
        iconRight?: JSX.Element;
        component?: JSX.Element;
        route: string;
        type?: string;
      }[] =  [
        {
            title: 'Balance Transfer',
            icon: <BiTransfer />,
            route: 'ad-accounts',
          },
        {
            title: 'Balance Transfer',
            icon: <BiTransfer />,
            route: 'ad-accounts',
          },
        {
            title: 'Balance Transfer',
            icon: <BiTransfer />,
            route: 'ad-accounts',
          },
        {
            title: 'Balance Transfer',
            icon: <BiTransfer />,
            route: 'ad-accounts',
          },
        {
            title: 'Balance Transfer',
            icon: <BiTransfer />,
            route: 'ad-accounts',
          },
    ]
  return (
    <div className= {style.addAccountMenuContainer}>
    {MenuAddAccountList.map((item, index) => {
        return <MenuItem
          key={index}
          title={item.title}
          icon={item.icon}
          iconRight={item.iconRight}
          type={item.type}
          component={item.component}
          route={item.route}
          // active={index === itemSelected}
          idx={index}
        />
    })}
      </div>
  )
}

export default MenuAddAccount
