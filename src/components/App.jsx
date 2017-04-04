import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'

class App extends Component {
	constructor(props) { 
		super(props);
		this.state = {
			username: 'adityabhushan',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	//Get user Data from github
	getUserData (){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data)
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				alert(err)
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}


	render() {
		return(
			<div>
				<Profile userData = {this.state.userData}/> 
			</div> 
			)
	}

}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: 'dd761213a1032505a0cd',
	clientSecret: '95897b9233d4478aacb728b7693d26b140c005be'
}

export default App