import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

import ColumnSelector from 'components/ColumnSelector'
import 'components/WeatherTable.css'

class WeatherTable extends React.Component {

  constructor(props) {
    super(props)
    this.onColumnsSelected = this.onColumnsSelected.bind(this);

    this.state = {
      showControls: false,
      data: [], // this is actual cell data for the table
        // react-table uses Header, accessor, show.  Checkbox uses show + columnName
        // columns are in state so table will re-render when "show" values change
      columns: [ // table "definition"
        { Header: 'City', accessor: 'city', show: true, columnName:'City'},
        { Header: 'Low °F', accessor: 'low', show: true, columnName:'Low °F',
          Cell: (row) => this.centerAlign(row.value) 
        },
        { Header: 'High °F', accessor: 'high', show: true, columnName:'High °F',         
          Cell: row => this.centerAlign(row.value)
        },
        { Header: 'Forecast', accessor: 'forecast',  show: true, columnName:'Forecast' },
      ]
    }
  }

  componentDidMount() {
    // data may retrieved from another source here...
    this.setState ( {
      data: [
        { city: 'New York', low: '28', high: '42', forecast: 'cloudy' },
        { city: 'Dallas', low: '38', high: '50', forecast: 'sunny' },
        { city: 'Chicago', low: '26', high: '34', forecast: 'rain' },
        { city: 'Seattle', low: '39', high: '44', forecast: 'cloudy' },
        { city: 'Honolulu', low: '75', high: '82', forecast: 'partly sunny' },
      ]
    });
  }

  // Table styling helpers
  centerAlign = (label) => <div style={{ textAlign: "center" }}>{label}</div>

  // modal helpers
  showControls = () => { this.setState({ showControls: true }); };
  hideControls = () => { this.setState({ showControls: false }); };

  onColumnsSelected(newColumns) {
    this.setState({columns: [...newColumns]});
    this.hideControls();
  }

  render() {
    const {showControls, data, columns} = this.state;

    return (
      <React.Fragment>
          <button type="button" onClick={this.showControls}>
            Column Selection
          </button>
          <ReactTable
            data={data}
            columns={columns}
            showPagination={false}
          />
          <ColumnSelector show={showControls} 
            handleCancel={this.hideControls} handleSave={this.onColumnsSelected}
            columns={columns}  />   
      </React.Fragment>
    );
  }
}

export default WeatherTable;
