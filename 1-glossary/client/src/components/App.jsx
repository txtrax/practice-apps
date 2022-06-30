import React from 'react';
import EntryList from './EntryList.jsx';
import AddEntry from './AddEntry.jsx';
import axios from 'axios';

let dummyData = [{
  _id: 1,
  word: 'Aaron',
  description: 'lord of pans',
  italicized: false,
  private: false
}]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
    this.onAdd = this.onAdd.bind(this);
    this.getWords = this.getWords.bind(this);
  }

  componentDidMount() {
    this.getWords()
    // this.setState({list: dummyData});
  }

  getWords() {
    console.log('in getWords')

    axios.get('/words')
      .then((results) => {
        this.setState({list: results.data});
      })
      .catch((err) => {
        console.log('error')
      })
  }

  onAdd(obj) {
    // let { list } = this.state;
    // obj._id = list.length + 1;

    // this.setState({list: [...dummyData, obj]})
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        <h1>Glossary List</h1>
        <h3>Add more words!</h3>
        <AddEntry onAdd={this.onAdd}/>
        <h3>Created:</h3>
        <EntryList list={this.state.list}/>
      </div>
    )
  }
}

export default App;