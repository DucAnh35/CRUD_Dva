import React, { Component } from 'react';
import { connect } from "dva";
import { MasterLayout } from '../layouts/index';
import TableComponent from '../components/table/TableComponent';
import FormComponent from '../components/form/FormComponent';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      views: "TABLE",
      dataEdit: {},
      edit: false
    }
  }
  onChangerViews = () =>{
    if(this.state.views === "TABLE"){
      this.setState({
        views: "FORM"
      })
    }else{
      this.setState({
        views: "TABLE"
      })
    }
  }
  onAdd = (data) =>{
    this.props.dispatch({
      type: "product/create",
      payload: data
    });
    this.setState({
      views: "TABLE",
      edit: false
    })
  }
  onDelete = (id) =>{
    this.props.dispatch({
      type: "product/delete",
      payload: id
    });
  }
  
  onEdit = (id) =>{
    this.setState({
      views: "FORM",
      dataEdit: this.props.product.filter(item => item.id === id)[0],
      edit: true,
    });
  }
  onUpdate = (data) =>{
    this.props.dispatch({
      type: "product/update",
      payload: data
    });
    this.setState({
      views: "TABLE",
      edit: false
    })
  }
  render() {
    const {product} = this.props;
    const {views} = this.state;
    const ViewMain = () => {
      if(views === "TABLE"){
        return(
          <TableComponent
            data = {product} 
            onDelete={this.onDelete} 
            onChangerView={this.onChangerViews} 
            onEdit={this.onEdit}>
          </TableComponent>
        )
      }else{
        return(
          <FormComponent 
            onChangerView={this.onChangerViews} 
            onUpdate={this.onUpdate} onAdd={this.onAdd} 
            dataEdit={this.state.dataEdit} 
            edit={this.state.edit}>
          </FormComponent>
        )
      }
    }
    return (
      <MasterLayout>{ViewMain()}</MasterLayout>
    );
  }
}
const mapStateToProps = (state) =>{
  const  {product} = state.product;
  return {
    product
  }
}
export default connect(mapStateToProps)(HomePage);