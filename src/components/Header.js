import React, { useEffect, useState } from 'react'
import { Layout as AntdLayout, Menu } from 'antd';
import { Link, useLocation  } from 'react-router-dom';
import { CreditCardOutlined, HomeOutlined, InfoCircleOutlined, PlusCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = AntdLayout;

const menuItems = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: "/cards",
        label: <Link to="/cards">Cards</Link>,
        icon: <CreditCardOutlined />
    },
    {
        key: "/new",
        label: <Link to="/new">New</Link>,
        icon: <PlusCircleOutlined />
    },
    {
        key: "/about",
        label: <Link to="/about">About</Link>,
        icon: <InfoCircleOutlined />
    }
]

export default function Header() {
    let location = useLocation();

    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    return (
        <AntdHeader
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[current]}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >                
            </Menu>
        </AntdHeader>
    )
}