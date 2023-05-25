import React from "react";

import './bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import ReactGridLayout, { WidthProvider, Responsive, Layout, Layouts } from "react-grid-layout";
import { TradingViewWidget, Themes } from 'react-tradingview-widget';
import ReactTooltip from 'react-tooltip';
import toast, { Toaster, ToastPosition } from 'react-hot-toast';

import { Ticker } from './components/Ticker';
import { Search} from './components/Search';
import { TokenDetail } from './components/TokenDetail';
import { Transactions } from './components/Transactions';
//import { Favorites } from './components/Favorites';

import { Token } from './components/Token';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

if ('ethereum' in window) {
  console.log('MetaMask is installed!');
}

export interface AppLayoutProps {
  onLayoutChange: (currentLayout: Layout[], allLayouts: Layouts) => void
}

interface AppLayoutState {
  layouts: ReactGridLayout.Layouts;
}

export class AppLayout 
    extends React.Component<AppLayoutProps, AppLayoutState> {
  constructor(props: AppLayoutProps) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 50
    };

  }

  resetLayout() {
    this.setState({ layouts: null });
  }

  onLayoutChange(currentLayout: Layout[], allLayouts: Layouts) {
    saveToLS("layouts", currentLayout);
    this.setState({ layouts: allLayouts });
  }

  render() {
    return (
      <>
      <section className="bg-half-260 bg-primary d-table w-100 bg-image"
        style={{  
          backgroundImage: "url(" + "bg.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} >
        <div className="bg-overlay"></div>
      </section>
      <header className="topnav">
        <div className="">
          <div className="logo">
              <img src="altrover.png" className="l-light" height="44" alt=""/>
          </div>
          <Search></Search>
          <button className="connect-wallet"
            >
            Connect Wallet
          </button>
          <button className="connect-wallet alt-button"
            onClick={event =>  window.location.href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xfdd62500e46343ead7e57cbcdbfbdfb37f5e0680'}
            >
            Buy RVR
            <img src="sm-icon.png"></img>
          </button>
        </div>
      </header> 
      <div className="app-grid">
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={50}
          layouts={this.state.layouts}
          onLayoutChange={(currentLayout: Layout[], allLayouts: Layouts) =>
            this.onLayoutChange(currentLayout, allLayouts)
          }>

          <div key="2" data-grid={{ w: 9, h: 1, x: 3, y: 1, minW: 1, minH: 1 }}>
            <Ticker></Ticker>
          </div>
          <div key="3" data-grid={{ w: 3, h: 11, x: 0, y: 2, minW: 1, minH: 1 }}>
            <TokenDetail></TokenDetail>
          </div>
          <div key="4" data-grid={{ w: 9, h: 10, x: 4, y: 2, minW: 1, minH: 1 }}>
            <div className="chart-container">
              {/*
                <TradingViewWidget
                  symbol="WINGUSDT"
                  theme={Themes.DARK}
                  locale="en"
                  autosize
                  />
                */}
              </div>
          </div>
          <div key="5" data-grid={{ w: 3, h: 3, x: 0, y: 3, minW: 1, minH: 1 }}>
            <div className="ad-container">
              <img src="binance-ad.jpg" className="large-ad"/>
            </div>
          </div>
          <div key="6" data-grid={{ w: 2, h: 3, x: 3, y: 3, minW: 1, minH: 1 }}>
            <div className="ad-container">
                <img src="discord.png" className="large-ad"/>
            </div>
          </div>
          <div key="7" data-grid={{ w: 3, h: 3, x: 5, y: 3, minW: 1, minH: 1 }}>
              <Transactions></Transactions>
          </div>
          <div key="8" data-grid={{ w: 4, h: 3, x: 8, y: 3, minW: 1, minH: 1 }}>

          </div>
        </ResponsiveReactGridLayout>
        </div>
      <ReactTooltip className="moontrust-popover"
          effect="solid"
          delayShow={400}
        />
      <Toaster
        position="top-right"
        reverseOrder={false}
        border-radius="2px"
        toastOptions={{
          className: '',
          style: {
            margin: '10px',
            padding: '15px',
            background: '#fff',
            color: '#555',
            zIndex: 1,
            borderRadius: "2px",
          },
          duration: 5000,
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
    );
  }
}



function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}