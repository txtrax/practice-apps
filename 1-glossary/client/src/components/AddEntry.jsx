import React from 'react';

class AddEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      word: '',
      description: ''
    }
    this.onWordChange = this.onWordChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onWordChange(e) {

    this.setState({word: e.target.value})
  }

  onDescChange(e) {

    this.setState({description: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    let newEntry = {
      word: this.state.word,
      description: this.state.description,
      italicized: false,
      private: false
    }
    this.props.onAdd(newEntry);

    this.setState({
      word: '',
      description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Word:
          <input
            name='word'
            type='text'
            value={this.state.word}
            placeholder='Add word here'
            onChange={this.onWordChange}
          />
          Description:
          <input
            name='description'
            type='text'
            value={this.state.description}
            placeholder='Add description here'
            onChange={this.onDescChange}
          />
        </label>
        <button>Add</button>
      </form>
    )
  }
}

export default AddEntry;