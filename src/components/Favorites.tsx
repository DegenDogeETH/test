import * as React from 'react';


export class Favorites extends React.Component {

  private favorites = [{
    id: 1,
    tokenname: 'Moonstorm',
    ticker: '', 
  },{
    id: 2,
    tokenname: 'Elongate',
    ticker: '', 
  },{
    id: 3,
    tokenname: 'Bonfire',
    ticker: '', 
  },{
    id: 4,
    tokenname: 'AltMoon',
    ticker: '', 
  },{
    id: 5,
    tokenname: 'Bitcoin',
    ticker: '', 
  },{
    id: 6,
    tokenname: 'Ethereum',
    ticker: '', 
  },{
    id: 7,
    tokenname: 'Orfano',
    ticker: '', 
  },{
    id: 8,
    tokenname: 'AquaGoat',
    ticker: '', 
  }];


  render(): JSX.Element {


    return (
      <> 
        <div className="favorite-container">
          <h4>Favorites</h4>
          <h4>Recent Views</h4>
          <div className="favorites glossy">
            <ul>
            {this.favorites.map((favorite) => {
                return (
                  <li>
                    <a href="">
                      {favorite.tokenname}
                      <i className="fa fa-star favorite-list-star"></i>
                    </a>
                  </li>
                );
              })}   
            </ul>
          </div>
        </div>
      </>
    );
  }

}
