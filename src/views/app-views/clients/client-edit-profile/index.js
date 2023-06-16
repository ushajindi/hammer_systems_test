import React, { useEffect } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients.clientProfile);

    const redirectClientList = () => {
        history.push('/app/clients/clients-list');
    };
    const fakeActionSaga = (milliseconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    };

    useEffect(() => {
        if (!clients) {
            redirectClientList();
        }
    }, []);

    const onFinish = async (values) => {
        const key = 'updatable';
        message.loading({ content: 'Updating...', key });
        fakeActionSaga(1000).then(res=>{
            message.success({ content: 'Done!', key });
            redirectClientList()
            message.destroy()

        })


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {clients ? (
                <>
                    <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                        <Avatar size={90} icon={<UserOutlined />} />
                    </Flex>
                    <div className="mt-4 p-1">
                        <Form
                            name="basicInformation"
                            layout="vertical"
                            initialValues={{
                                name: clients?.name,
                                email: clients?.email,
                                username: clients?.username,
                                phoneNumber: clients?.phone,
                                website: clients?.website,
                                address: clients?.address.city,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        gutter={ROW_GUTTER}
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={28} md={12}>
                                    <Form.Item
                                        gutter={ROW_GUTTER}
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        gutter={ROW_GUTTER}
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item gutter={ROW_GUTTER} label="Phone Number" name="phoneNumber">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item gutter={ROW_GUTTER} label="Website" name="website">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item gutter={ROW_GUTTER} label="Address" name="address">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Form>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default EditProfile;
