import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props.entry)
    return (
      <div>
        {this.props.entry.word} : {this.props.entry.description}
      </div>
    )
  }
}

export default Entry;