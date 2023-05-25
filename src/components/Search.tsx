import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export class Search extends React.Component {

  private options = ['Bitcoin', 'ETH', 'BNB', 'ADA', 'WING',
    'PolkaDot', 'Chainlink', 'XRP', 'Elongate','MCT'];

  render(): JSX.Element {


    return (
      <>
      <div className="token-search">
          <Autocomplete
          className='search-field'
          options={this.options}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input style={{ }} type="text" {...params.inputProps}
                placeholder="Search by token name or contract.."/>
            </div>
          )}
        />
        <i className="fa fa-search search-bar-icon"></i>
      </div>
      </>
    );
  }

}
