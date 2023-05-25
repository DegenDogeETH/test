import * as React from 'react';
import toast, { Toaster, ToastPosition } from 'react-hot-toast';
import { TokenInfo } from './Token';

interface TokenProps {
}

interface TokenState {
  token: TokenInfo;
  errorMessage: string;
}
 
export class TokenDetail extends React.Component <TokenProps, TokenState> {
  constructor(props: TokenProps) {
    super(props);
    this.state = { 
      token: null,
      errorMessage: ''
    };
  }

  private tokenName = '';
  private trustScore = "100" + '%';

  private tokenTest = "https://api.dex.guru/v1/tokens/0x81fd490b7a4fb56c8a25bde0c5648f48671a846a";

  componentDidMount() {
    this.getTokenDetail();
  }

  getTokenDetail() {
    fetch(this.tokenTest).then(async response => {
      const data = await response.json();

      if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(new Error(error));
      }
      
      this.setState({token: data});
      console.log(data);
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
  }



  
  render(): JSX.Element {
    //const { token } = this.state;

    return (
      <>
        <div className="token-detail">
          <i className="fa fa-star-o favorite-star" 
            onClick={() => this.setFavoriteToken()}
            ></i>
          <div className="">
            <img className="token-icon" src="wing.png"/>
            <h4>WING Finance</h4>
            {/*{this.state.token.name}*/}
          </div>
          <hr></hr>
          <div className="tokenomics glossy">
            <span>{this.tokenName} <b>Total Supply:</b> 5,000,000 WING</span>
            <span>{this.tokenName} <b>Circulating Supply:</b> 2,459,000 WING</span>
            <span>{this.tokenName} <b>Market Cap:</b> $68,330,981</span>
            <span>
              {this.tokenName} <b>Website:</b> <a href="https://wing.finance" target="_blank">wing.finance</a>
            </span>
            {/*<span><i class="fa fa-exclamation-triangle"></i>Report missing or incorrect details</span>*/}
          </div>
          <hr></hr>
          <div className="bsc-lookup glossy">
            <span> 
              <a href="https://bscscan.com/address/0x688dc65d8de30250524fcd381d79b957b7e872f1"> 
              <img src="bsc-white-icon.png"/>
                View {this.tokenName} Transactions
              </a>
            </span>
            <span>
              <a href="https://bscscan.com/address/0x688dc65d8de30250524fcd381d79b957b7e872f1"> 
              <img src="bsc-white-icon.png"/>
                View {this.tokenName} Contract
              </a>
            </span>
            <span>
            <a href="https://bscscan.com/address/0x688dc65d8de30250524fcd381d79b957b7e872f1">
              <img src="bsc-white-icon.png"/>
                View {this.tokenName} Holders
              </a>
            </span>
            </div>
            <hr></hr>
            <div className="safety-score glossy"
              data-tip="MoonTrust Score can identify potential
              issues related to the contract address/token selected by users. 
              This tool is not 100% accurate, and only meant to provide added insight.  Always do your
              own research before investing or trading in any asset.">
              <h5>AltTrust Score
                <i className="fa fa-info-circle safety-score-icon"></i>
              </h5>
              <span className="trust-score">
                {this.trustScore}
              </span>
              <a href="#">How is this score calculated?</a>
            </div>
            <hr></hr>
            <button className="pancake-swap"> 
              <img src="cake-logo.png"/>
            </button>
            {/*<button className="binance"> 
              <img src="binance-logo.png"/>
            </button>*/}

        </div>
      </>
    );
  }

  setFavoriteToken(){
    toast.success('Added WING to favorites');
  }
}
