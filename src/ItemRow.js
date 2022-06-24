import React from "react"
import { Checkbox, IconButton } from "@material-ui/core"
import { DeleteOutlined } from "@material-ui/icons";

class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  deleteEventHandler = () => {
    this.delete(this.state.item);
  };


  render() {
    const item = this.state.item;

    return (
        <tbody>
            <tr>
                <td><Checkbox checked = {item.sale} /></td>
                <td>{item.id}</td><td>{item.title}</td><td>{item.type}</td>
                <td><IconButton 
                    saria-label = "Delete Item"
                    onClick = {this.deleteEventHandler}>
                <DeleteOutlined/>
              </IconButton></td>
            </tr>
        </tbody>
    );
  }
}


export default ItemRow;