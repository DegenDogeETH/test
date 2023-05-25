import * as React from 'react';





export class Transactions extends React.Component {


  transactions2 = "https://api.dex.guru/v1/tradingview/history?symbol=0x81fd490b7a4fb56c8a25bde0c5648f48671a846a&resolution=60&from=1620966171&to=1621002171";
  transactions3 = "https://api.bscscan.com/api?module=account&action=txlist&address=0x81fd490b7a4fb56c8a25bde0c5648f48671a846a&startblock=1&endblock=100&sort=asc&apikey=PWNWHIPS7YX5PB2D8PZWYHFJIJNCIRV6BA"
  transactions4 = "https://api.bscscan.com/api?module=account&action=tokentx&address=0x81fd490b7a4fb56c8a25bde0c5648f48671a846a&startblock=0&endblock=2500000&sort=asc&apikey=PWNWHIPS7YX5PB2D8PZWYHFJIJNCIRV6BA";
  componentDidMount() {
    this.getTokenDetail();
  }

  getTokenDetail() {
    fetch(this.transactions4).then(async response => {
      const data = await response.json();

      if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(new Error(error));
      }
      
      this.setState({token: data});
      console.log(data)
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
  }


  render(): JSX.Element {
    return (
      <>

      </>
    );
  }

}
