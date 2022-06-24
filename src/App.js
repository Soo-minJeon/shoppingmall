import React from 'react';
import './App.css';
import ItemController from './ItemController'
import Item from './Item'
import ItemRow from './ItemRow'
import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import { call, signout } from "./service/ApiService";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [],
      allitems: []
    };
  }

  componentDidMount(item) {
    call("/shoppingmall/list", "GET", null).then((response) => 
      this.setState({ items : response.data, allitems : response.data})
    )
  }

  loading = () => {
    call("/shoppingmall/list", "GET", null).then((response) => 
        this.setState({ allitems : response.data })
      )
  }

  add = (item) => {
    call("/shoppingmall", "POST", item).then((response) => 
      this.setState({items : response.data, allitems : response.data})
    )
  }

  search = (item) => {
    call("/shoppingmall/findByTitle", "POST", item).then((response) =>
      this.setState({items : response.data })
    )
  }

  delete = (item) => {
    call("/shoppingmall", "DELETE", item).then((response) => 
      this.setState({items : response.data, allitems : response.data })
    )
  }

  update = (item) => {
    this.setState({items : [], allitems : []})
    call("/shoppingmall", "PUT", item).then((response) =>
      this.setState({ items : response.data, allitems : response.data }),
    )
  }

  render(){
    var Items = this.state.items.length > 0 && (
      <Grid container>
          {this.state.items.map((item, idx) => (
            <Item 
              fullWidth
              item = {item} 
              key = {item.title}
              update = {this.update}
              delete = {this.delete} />
          ))} 
       </Grid>
    )

    var AllItems = this.state.allitems.length > 0 && (
      <table border = "1">
        <thead> 
            <tr>
              <th>sale</th><th>id</th><th>title</th><th>type</th><th>삭제버튼</th>
            </tr>
        </thead>
          {this.state.allitems.map((item, idx) => (
            <ItemRow 
              fullWidth
              key = {item.title}
              item = {item}
              delete = {this.delete} />
          ))} 
       </table>
    )

    // NavigaterBar 추가
    var navigationBar = (
      <AppBar position = "static" color = "secondary" style = {{marginBottom : 20}}>
        <Toolbar>
          <Grid justifyContent = "space-between" container >
            <Grid item>
              <Typography variant = "h6">SooMin shoppingmall </Typography>
            </Grid>
            <Grid>
              <Button color = "inherit" onClick = {signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    /* 로딩 중이 아닐 때 렌더링할 부분 */
    var todoListPage = (
      <div className="App">
        {navigationBar}
        <ItemController
            add={this.add}
            search={this.search}
            update={this.update}
            delete={this.delete}
        />
        {Items}
        {AllItems}
      </div>
    );
    
    /* 로딩 중일때 렌더링할 부분 */
    var loadingPage = <h1>로딩중...</h1>

    var content = loadingPage;

    if (!this.state.loading) {
      /* 로딩 중이 아니면 todoListPage를 선택 */
      content = todoListPage;
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
