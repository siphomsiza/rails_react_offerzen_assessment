import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCard from "./NewCard"

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/list/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ boards: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { boards } = this.state;
    const all_boards = boards.map((board, index) => (
      <div key={index} className="vw-100 vh-160 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent" style={{ marginBottom: '-6rem',paddingTop: '30px' }}>
          <div className="container secondary-color">
            <div className="row">
              <h4 className="display-6" style={{lineHeight: '2.2' }}>{board.name}</h4>
            </div>
            <div className="leads row">
              {
                board.lists.map((list,index) => {
                  return (
                    <div key={index} className="card" style={{ backgroundColor: '#E4EBEF',width: '42%' }}>
                      <div className="card-body">
                        <h6 className="card-title">
                           <div className="row">
                              <div className="col-sm-9"><strong>{list.name}</strong></div>
                              <div className="col-sm-3">
                                <NewCard list={list} history={this.history}/>
                              </div>
                           </div>
                        </h6>
                        <table className="card-text">
                          <tbody>
                          <tr>
                          <td>
                          {
                            list.cards.map((card,index )=> {
                              return (
                                <div key={index} className="row card-text-row">
                                  {card.name}
                                </div>
                               )
                            })
                          }
                          </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    ));


    return (
      <>
      {all_boards}
      </>
    );
  }

}
export default List;
