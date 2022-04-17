import React, { Component } from "react";

export default class CreateMovie extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLength=this.onChangeLength.bind(this);
    this.onChangePublishedyear =this.onChangePublishedyear.bind(this);
    this.onChangeRate = this.onChangeRate(this);

    this.state = {
      username: "",
      description: "",
      length: 0,
      publishedyear: new Date(),
      rate: 0,
      users: [],
    };
  }

  componentDidMount(){
      this.setState({
          users:['test yser'],
          username:'test user'
      })
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }



  onChangeLength(e) {
    this.setState({
      length: e.target.value,
    });
  }

  onChangePublishedyear(date) {
    this.setState({
      publishedyear: date,
    });
  }
  onChangeRate(e) {
    this.setState({
      rate: e.target.value,
    });
  }

  onSubmit(e){
      e.preventDefault();

      const movie = {
        username=this.state.username,
        description=this.state.description,
        length=this.state.length,
        publishedyear=this.state.publishedyear,
        rate = this.state.rate
      }
      console.log(movie)

      window.location = '/';
  }
  render() {
    return (
        <div>
            <h3> Create new movies </h3>
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label> Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>

                        <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
                </div>
                <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                </div>

                <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>

            </form>
        </div>
    )
    
  }
}


/*

rout add 
new access json eccerise added 

update compeonent will monunts the user in the database 

axiis get htepps then take resoinse and pass see if 
resoponse is not 0 then 

response.data.map 

username test user 

then pass user ,yser name 
post then frm using axious to post to the 


constructor props usper prosps 
this.delete 

get response data get ded mount 

all the filed then we get it in excersice array 

error 

get error and get end points  
*/
