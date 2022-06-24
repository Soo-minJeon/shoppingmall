import React from 'react'
import { TextField, Grid, Button} from "@material-ui/core"

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { title: "", userId: "", type: "", sale: false },
      value: 1,
    };
    this.search = props.search;
  }

  onButtonClick = () => {
    this.search(this.state.item);
    this.setState({item : {title : "" }})
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
            onKeyPress = {this.enterKeyEventHanler}
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
            작성 완료 | 제품 검색
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default SearchItem;