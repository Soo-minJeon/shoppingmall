import React from 'react'
import { TextField, Grid, Button} from "@material-ui/core"
import { CenterFocusStrong, FormatAlignCenter } from '@material-ui/icons';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { title: "", userId: "", type: "", sale: false },
      value: 0,
    };
    this.add = props.add;
  }

  onButtonClick = () => {
    this.add(this.state.item);
    this.setState({item : {title : "", userId: "", type: ""}})
  }

  enterKeyEventHanler = (e) => {
    if (e.key === 'Enter'){
      this.onButtonClick();
    }
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
        <Grid xs={11} md={11} item style={{ paddingLeft: 20}}>
          <TextField
            style={{ width: "70%"}}
            placeholder="title"
            value={this.state.item.title}
            onChange={this.onTitleInputChange}
          />
        </Grid>
        <Grid xs={11} md={11} item style={{ paddingLeft: 20 }}>
          <TextField
            style={{ width: "70%" }}
            placeholder="type"
            value={this.state.item.type}
            onChange = {this.onTypeInputChange}
            onKeyPress = {this.enterKeyEventHanler}
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
            onClick={this.onButtonClick}
          >
            작성 완료 | 제품 추가
          </Button>
        </Grid>
      </Grid>
    );
  }
}


export default AddItem;