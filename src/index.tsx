import React from "react";
import ReactDOM from "react-dom";
import ReactGridLayout, { Layout, Layouts } from "react-grid-layout";
import { AppLayout } from "./App";


interface RootLayoutProps {

}

interface RootLayoutState {
  layout: ReactGridLayout.Layout[];
}

export class RootLayout 
    extends React.Component<RootLayoutProps, RootLayoutState> {
  constructor(props: RootLayoutProps) {
    super(props);
    this.state = { layout: null };
  }

  

  onLayoutChange(currentLayout: Layout[], allLayouts: Layouts) {
    this.setState({ layout: currentLayout });
  }

  stringifyLayout() {
    return this.state.layout.map(function (layout) {
      return <div className="layoutItem" key={layout.i}></div>;
    });
  }

  render() {
    return (
      <div>
        <AppLayout onLayoutChange={(currentLayout: Layout[], 
            allLayouts: Layouts) => {
          return this.onLayoutChange(currentLayout, allLayouts);
        }}/>
      </div>
    );
  }
}


console.log('root layout is ', RootLayout);

const contentDiv = document.getElementById("root");
//const gridProps = /*window['gridProps'] ||*/ {};
const gridProps = window['gridProps'] || {};
ReactDOM.render(React.createElement(RootLayout, gridProps), contentDiv);
//ReactDOM.render(React.createElement(Fuckie), contentDiv);
