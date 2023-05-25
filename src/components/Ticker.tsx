
import * as React from 'react';
import { TokenInfo } from './Token';



interface TokenProps {
}

interface TokenState {
  token: TokenInfo[];
  errorMessage: string;
}

export class Ticker extends React.Component<TokenProps, TokenState> {
  constructor(props: TokenProps) {
    super(props);
    this.state = { 
      token: null,
      errorMessage: ''
    };
  }

private cgTop10Crypto = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  componentDidMount() {
    this.getTop10();
  }

  getTop10() {
    fetch(this.cgTop10Crypto).then(async response => {
      const data = await response.json();

      if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      
      this.setState({token: data})
      console.log(data);
      
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
  }
  

  



  render(): JSX.Element {
    if (!this.state.token) {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    }
    

    return (
      <>
      <ul className="ticker">
        {this.state.token.slice(0, 8).map((item) => {
          return (
            <li>
            <img src={item.image}/>
            <span className="ticker-price">
              ${item.current_price}
            </span>
            <span className="price-change" style={{
                color: item.price_change_percentage_24h < 0 ? "#ea3943" : "#16c784"
              }}>
              <i className="fa fa-caret-up"></i>
              {item.price_change_percentage_24h.toFixed(1)}%
            </span>
          </li>
          );
        })}
      </ul>
      </>
    );
  }

}
