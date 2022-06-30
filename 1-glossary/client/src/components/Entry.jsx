import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.entry.word} : {this.props.entry.description}
      </div>
    )
  }
}

export default Entry;