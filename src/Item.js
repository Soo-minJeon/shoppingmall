import React from "react"
import {Card, CardContent, Typography, IconButton , Checkbox} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item : props.item, readOnly : true};
        this.delete = props.delete
    }

    deleteEventHandler = () =>{
      this.delete(this.state.item)
    }

    render() {
        const item = this.state.item;


        return (

            <Card  style = {{width:"20%", height:"25%", justifyContent : 'flex-start', margin : 16, padding : 16}} >
              <CardContent>

                <Checkbox 
                    checked = {item.sale} />
                
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>

                <Typography
                  sx={{ fontSize: 10 }}
                  gutterBottom>
                      type : {item.type}
                </Typography>

              </CardContent>
              <IconButton 
                saria-label = "Delete Item"
                onClick = {this.deleteEventHandler}>
                <DeleteOutlined/>
              </IconButton>
            </Card>
            
        );
    }
}

export default Item;