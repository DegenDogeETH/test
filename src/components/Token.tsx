import * as React from 'react';

export interface TokenInfo {
  name: string;
  price: number;
  priceChange: number;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export class Token extends React.Component {


  componentDidMount() {
  }



  render(): JSX.Element {


    return (
      <>
        <p></p>
      </>
    );
  }

}
