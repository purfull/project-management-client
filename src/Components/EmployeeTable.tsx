import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Table } from "antd";
import React, { lazy } from "react";

const PrjtMngmntTable = () => {
    const dataSource = [
        {
            key: '1',
            Project: 'Mike',
            Client: 32,
            Users: '10 Downing Street',
            Status: 'Active'
        },
        {
            key: '1',
            Project: 'Mike',
            Client: 32,
            Users: '10 Downing Street',
            Status: 'Active'
        },
        {
            key: '3',
            Project: 'Mike',
            Client: 32,
            Users: '10 Downing Street',
            Status: 'Active'
        },
        {
            key: '4',
            Project: 'Mike',
            Client: 32,
            Users: '10 Downing Street',
            Status: 'Active'
        },
    ];

    const items: any = [{
        label: (<div>Edit</div>),
        key: 1
    }, {
        label: (<div>Delete</div>),
        key: 2
    }]

    const columns = [
        {
            title: 'Project',
            dataIndex: 'Project',
            key: 'Project',
        },
        {
            title: 'Client',
            dataIndex: 'Client',
            key: 'Client',
        },
        {
            title: 'Users',
            dataIndex: 'Users',
            key: 'Users',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Dropdown menu={{ items }} trigger={['hover']} >
                    <MoreOutlined />
                </Dropdown>
            )

        }
    ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default PrjtMngmntTable;