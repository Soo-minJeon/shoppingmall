import React from 'react'
import { TextField, Grid, Button, Checkbox} from "@material-ui/core"
import { call } from "./service/ApiService";

class UpdateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { id: "", title: "", userId: "", type: "", sale: false },
      value: 0,
    };
    this.update = props.update
    this.search = props.search
  }

  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.sale = !thisItem.sale;
    this.setState({item : thisItem});
  }

  onButtonClick_search = () => {
    this.this_search(this.state.item)
    this.search(this.state.item)
  }

  this_search = (i) => {
    call("/shoppingmall/findByTitle", "POST", i).then((response) =>
      this.setState({item : response.data[0] }) 
    )
  }
  onButtonClick_Update = () => {
    this.update(this.state.item);
    this.setState({item : {title : "", userid: "", type: ""}})
  }

  onTitleInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  onUserIDInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.userId = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  onTypeInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.type = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  render() {
    return (
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <TextField
            style={{ width: "70%" }}
            placeholder="title"
            value={this.state.item.title || ""}
            onChange = {this.onTitleInputChange}
          />
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <br></br>
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <Button
            style={{ width: "70%" }}
            color="secondary"
            variant="contained"
            onClick={this.onButtonClick_search}
          >
            제품 검색
          </Button>
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <br></br>
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <TextField
            style={{ width: "70%" }}
            placeholder="type"
            value={this.state.item.type || ''}
            onChange = {this.onTypeInputChange}
          />
        </Grid>

        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          sale : 
          <Checkbox 
              checked = {this.state.item.sale || false} 
              onChange = {this.checkboxEventHandler}
          />
        </Grid>

        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <Button
            style={{ width: "70%" }}
            color="secondary"
            variant="contained"
            onClick={this.onButtonClick_Update}
          >
            작성 완료 | 제품 변경
          </Button>
        </Grid>
      </Grid>
    );
  }
}


export default UpdateItem;