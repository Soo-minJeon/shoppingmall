import React from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import UpdateItem from './UpdateItem'
import DeleteItem from './DeleteItem'
import { Typography, Tabs, Tab, Box, Paper} from "@material-ui/core"
import { AddCircleSharp, CreateSharp, SearchSharp, DeleteSharp } from "@material-ui/icons"

class ItemController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items : [] , value : 0};
    this.loading = props.loading
    this.add = props.add
    this.search = props.search
    this.update = props.update
    this.delete = props.delete
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <Box>
        <Paper
          style={{ marginLeft: "25%", width : "50%", height : "370px", padding : 30}} >
          <Tabs value = {this.state.value} onChange={this.handleChange}variant="scrollable" scrollButtons = "auto">
            <Tab label="제품 추가" icon={<AddCircleSharp />} {...this.a11yProps(0)} />
            <Tab label="제품 검색" icon={<SearchSharp />} {...this.a11yProps(1)} />
            <Tab label="제품 수정"icon={<CreateSharp />} {...this.a11yProps(2)} />
            <Tab label="제품 삭제" icon={<DeleteSharp />} {...this.a11yProps(2)} />
          </Tabs>

        <TabPanel value={this.state.value} index={0} stype = {{padding : 20}}> 
            <br />
            < AddItem loading = {this.loading} add = {this.add}/>
        </TabPanel>

        <TabPanel value={this.state.value} index={1}>
            <br />
            < SearchItem search = {this.search}/>
        </TabPanel>

        <TabPanel value={this.state.value} index={2}>
            <br />
            < UpdateItem loading = {this.loading} update = {this.update} search = {this.search} items = {this.items} />
        </TabPanel>

        <TabPanel value={this.state.value} index={3}>
            <br />
            <DeleteItem loading = {this.loading} delete = {this.delete} />
        
        </TabPanel>
        </Paper>
        
      </Box>
    );
  }
}

class TabPanel extends React.Component {
  render() {
    return (
      <Typography component="div" hidden={this.props.value !== this.props.index}>
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}

export default ItemController;