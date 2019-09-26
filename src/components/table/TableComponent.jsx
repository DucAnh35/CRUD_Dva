import React, { Component } from 'react';
import { Table, Avatar, Dropdown, Button, Icon, Menu } from "antd";
import table from './table.scss';
import moment from "moment";
class TableComponent extends Component {
  handleButtonClick = event => () => {
    this.setState({
      id: event.id
    });
  };
  onChangeView = () =>{
    this.props.onChangerView();
  }
  onDelete = () =>{
    this.props.onDelete(this.state.id)
  }
  onEdit = () =>{
    this.props.onEdit(this.state.id)
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Button type="danger" onClick={this.onDelete}>Delete</Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="primary" onClick={this.onEdit}>Edit</Button>
        </Menu.Item>
      </Menu>
    );
    const colums = [
      {
        title: "ID",
        width: 100,
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Images",
        width: 100,
        dataIndex: "images",
        key: "images",
        render: (text, row, index) => (
          <Avatar size="42">{text.charAt(0)}</Avatar>
        )
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        width: 110
      },

      {
        title: "Categories",
        dataIndex: "categories",
        key: "categories",
        width: 150
      },
      {
        title: "Tags",
        dataIndex: "gmails",
        key: "gmails",
        width: 150
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        width: 150
      },
      {
        title: "Date_create",
        dataIndex: "date_create",
        key: "date_create",
        width: 150,
        render: text => <p>{moment(text).format("DD/MM/YYYY HH:mm")}</p>
      },
      {
        title: "Delete",
        key: "operation",
        width: 100,
        render: event => (
          <Dropdown
            onClick={this.handleButtonClick(event)}
            overlay={menu}
            trigger={["click"]}
          >
            <Button type="ghost">
              <Icon type="down-square" />
            </Button>
          </Dropdown>
        )
      }
    ];
    return (
     <div className={table.table}>
       <div className={table.tableHeader}>
         <h2 className={table.tableTitle}>CRUD Dva</h2>
       </div>
       <div className={table.tableContent}>
         <div className={table.tableAdd}>
           <Button type="primary" onClick={this.onChangeView}>ADD</Button>
         </div>
         <Table
          columns={colums}
          dataSource={this.props.data}
          hasData
          rowKey="id"
         >
         </Table>
       </div>
     </div>
    );
  }
}

export default TableComponent;