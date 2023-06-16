import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import {addClient, clientProfile, getClients} from "../../../../redux/actions/Clients";
import AvatarStatus from "../../../../components/shared-components/AvatarStatus";
import {Button, Card, message, Table, Tooltip} from "antd";
import ClientView from "./ClientView";
import {useHistory} from "react-router-dom";

const ClientsList = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const clients = useSelector(state => state.clients.clients)
    const redirectToPage = (data) => {
        dispatch(clientProfile(data))
        history.push(`/app/clients/clients-profile-edit/${data.id}`);
    };

    useEffect(() => {
        if(clients.length===0){
            dispatch(getClients()) 
        }
        
    }, [])
    const [clientProfileVisible, setClientProfileVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const deleteUser = (userId) => {
        addClient(clients.filter((item) => item.id !== userId));
        message.success({content: `Deleted user ${userId}`, duration: 2});
    };

    const closeUserProfile = () => {
        setClientProfileVisible(false);
        setSelectedClient(null);
    };

    const tableColumns = [
        {
            title: 'Клиенты',
            dataIndex: 'name',
            render: (_, record) => (
                <div onClick={()=>{
                    redirectToPage(record)
                }} className="d-flex">
                    <AvatarStatus name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        }, {
            title: '',
            dataIndex: 'actions',
            render:(_,record)=>(
                    <a href={`tel:${record.phone}`}>{record.phone}</a>
    )
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="View">
                        <Button type="primary" onClick={()=>{
                            setClientProfileVisible(true)
                            setSelectedClient(elm)

                        }
                        } className="mr-2" icon={<EyeOutlined/>} size="small"/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined/>} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];

    return (
        <Card bodyStyle={{padding: '0px'}}>
            <Table columns={tableColumns} dataSource={clients} rowKey="id"/>
            {clientProfileVisible && (
                <ClientView visible={clientProfileVisible} close={closeUserProfile} data={selectedClient} />
            )}

        </Card>
    )


}

export default ClientsList;