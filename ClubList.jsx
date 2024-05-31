class ClubList extends React.Component {

  constructor(props) {
    super(props);
    Console.Log("props");
    this.state = { 
      name: this.props.data.clubs[0].name,
      year: this.props.data.clubs[0].year,
      city: this.props.data.clubs[0].city,
      achievement: this.props.data.clubs[0].achievement,      
      symbol: this.props.data.clubs[0].symbol,
      teamComposition: this.props.data.clubs[0].teamComposition
     };

     this.data = this.props.data;

     this.kapec = this.kapec.bind(this);
  }

  kapec(e)
  {
    let text = e.target.value.trim();
    for (let index = 0; index < this.props.data.clubs.length; index++){
      if(this.props.data.clubs[index].name===text)
        {
          this.setState({
            name: this.props.data.clubs[index].name,
            year: this.props.data.clubs[index].year,
            city: this.props.data.clubs[index].city,
            achievement: this.props.data.clubs[index].achievement,
            symbol: this.props.data.clubs[index].symbol,
            teamComposition: this.props.data.clubs[index].teamComposition
          });
          console.log(this.state.achievement);
          break;
        }
    }
  }

  render() {  
    Console.Log("render");
    return (
      <div style={{textAlign:"center"}}>
        <select onChange={this.kapec}>
          {this.props.data.clubs.map(function(club){
            return <ClubSelect name={club.name}/>;
          })}
        </select> 
      </div>
    );
  }
}