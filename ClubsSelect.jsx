class ClubSelect extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    Console.Log("render");
      return <option value={this.props.name}>{this.props.name}</option>;
  }
}