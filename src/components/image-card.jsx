import React, {Component} from 'react';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height);
      this.setState({spans});
    });
  }

  render() {
    const {description, urls} = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
