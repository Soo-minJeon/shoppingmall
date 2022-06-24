import React from 'react'
import { TextField, Grid, Button} from "@material-ui/core"
import { call } from "./service/ApiService";

class DeleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { title: "", userId: "", type: "", sale: false },
      value: 2,
    };
    this.delete = props.delete
  }

  onButtonClick = () => {
    this.this_search(this.state.item)
  }

  this_search = (i) => {
    call("/shoppingmall/findByTitle", "POST", i).then((response) =>
      this.delete(response.data[0]) 
    )
  }

  onTitleInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  render() {
    return (
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <br />
          <br />
          <br />
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <TextField
            style={{ width: "70%" }}
            placeholder="title"
            value={this.state.item.title}
            onChange = {this.onTitleInputChange}
          />
        </Grid>

        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <br></br>
        </Grid>

        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <Button
            style={{ width: "70%" }}
            variant="contained"
            color="secondary"
            onClick={this.onButtonClick}
          >
            작성 완료 | 제품 삭제
          </Button>
        </Grid>
      </Grid>
    );
  }
}


export default DeleteItem;