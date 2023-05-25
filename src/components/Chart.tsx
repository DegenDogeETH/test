import * as React from 'react';
//import TradingViewWidget, { Themes } from 'react-tradingview-widget';


export class Chart extends React.Component {
  private tokenName = '';
  private trustScore = "100" + '%';

  render(): JSX.Element {
    return (
      <>
        {/*<div className="chart-container">
          <span className="chart-title">
              WING Finance (WING/USD)
          </span>
          <br></br>
          <TradingViewWidget
            symbol="WINGUSDT"
            theme={Themes.DARK}
            locale="fr"
            autosize
            width="100%"
          />
        </div>*/}
      </>
    );
  }

}
