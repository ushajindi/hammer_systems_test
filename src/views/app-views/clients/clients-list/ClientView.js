import React from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    UserOutlined,
    CompassOutlined,
} from '@ant-design/icons';

const ClientView = ({ data, visible, close }) => {
    console.log(data)
    return (
        <Drawer
            width={300}
            placement="right"
            onClose={close}
            visible={visible}
        >
            <div className="text-center mt-3">
                <Avatar size={80} />
                <h3 className="mt-2 mb-0">{data?.name}</h3>
            </div>
            <Divider dashed />
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Account details</h6>
                <p>
                    <UserOutlined />
                    <span className="ml-3 text-dark">id: {data?.id}</span>
                </p>

            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
                <p>
                    <MailOutlined />
                    <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
                </p>
                <p>
                    <CompassOutlined />
                    <span className="ml-3 text-dark">{data?.address.city}</span>
                </p>
            </div>
        </Drawer>
    );
};

export default ClientView;
