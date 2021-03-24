import React, { Component } from 'react'
import Table from "react-bootstrap/Table"
import Collapse from "react-bootstrap/Collapse"

class PropertiesList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            propertiesList: this.props.propertiesList,
            collapseMenu: true
        };
    
        this.showHide = this.showHide.bind(this);
    }

    showHide = (e) => {
        e.preventDefault();
        this.setState({
            collapseMenu: !this.state.collapseMenu
        });
    }

    render() {
        if(this.props.propertiesList)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Postcode</th>
                    <th>Number</th>
                    <th>Flat</th>
                    <th>Street</th>
                    <th>Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.propertiesList.id}</td>
                        <td>{this.props.propertiesList.outcode} {this.props.propertiesList.incode}</td>
                        <td>{this.props.propertiesList.paon}</td>
                        <td>{this.props.propertiesList.saon}</td>
                        <td>{this.props.propertiesList.street}</td>
                        <td><button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo" onClick={this.showHide}>Click here</button></td>
                    </tr>
                    <Collapse in={!this.state.collapseMenu}>
                        <tr className="demo">
                            <th colSpan="2">Id</th>
                            <th colSpan="2">Date</th>
                            <th colSpan="2">Price</th>
                        </tr>
                    </Collapse>
                    <Collapse in={!this.state.collapseMenu}>
                        <tr  className="demo">
                            <td colSpan="2">{this.props.propertiesList.lrTransactions[0].id}</td>
                            <td colSpan="2">{this.props.propertiesList.lrTransactions[0].date}</td>
                            <td colSpan="2">{this.props.propertiesList.lrTransactions[0].price}</td>
                        </tr>
                    </Collapse>
                </tbody>
            </Table>
        )
        return null
    }
}

export default PropertiesList
