import React from 'react'
import { Layout as AntdLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CreditCardOutlined, HomeOutlined, InfoCircleOutlined, PlusCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = AntdLayout;

export default function Header() {
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
                defaultSelectedKeys={['2']}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Menu.Item key="1">
                    <HomeOutlined />
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <CreditCardOutlined />
                    <span>Cards</span>
                    <Link to="/cards" />
                </Menu.Item>
                <Menu.Item key="3">
                    <PlusCircleOutlined />
                    <span>New</span>
                    <Link to="/new" />
                </Menu.Item>
                <Menu.Item key="4">
                    <InfoCircleOutlined />
                    <span>About</span>
                    <Link to="/about" />
                </Menu.Item>
            </Menu>
        </AntdHeader>
    )
}