import React, { Component } from 'react'
import CustomButton from '../CustomButton/custom-button';

export default class Likes extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes : 0
        }
    }

    likeThisPost = () => {
        this.setState({likes: this.state.likes + 1})
    }

    dislikeThisPost = () => {
        this.setState({likes: this.state.likes === 0 ? null : this.state.likes-1})
    }

    render() {
        return (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                Likes: {this.state.likes}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <CustomButton onClick={this.likeThisPost} name="Like!" />
                <button onClick={this.dislikeThisPost}>Dislike!</button>
              </div>
            </div>
          </div>
        );
    }
}
