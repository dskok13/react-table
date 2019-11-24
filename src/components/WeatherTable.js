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
      columns: [ // table "definition"
        { Header: 'City', accessor: 'city', show: true, columnName:'City'},
        { Header: () => (
            <div style={{ textAlign: "center" }}>Low °F</div>
          ),
          accessor: 'low', show: true, columnName:'Low °F',
          Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
          )
        },
        { Header: () => (
            <div style={{ textAlign: "center" }}>High °F</div>
          ),
          accessor: 'high', show: true, columnName:'High °F',         
          Cell: row => (
            <div style={{ textAlign: "center" }}>{row.value}</div>
          )
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

  showControls = () => { this.setState({ showControls: true }); };
  hideControls = () => { this.setState({ showControls: false }); };

  onColumnsSelected(newColumns) {
    let work = [...this.state.columns]
    newColumns.forEach ( (c,index) => work[index].show = c.show)
    this.setState({columns: work});
    this.hideControls();
  }


  render() {
    const {showControls, data, columns} = this.state;
    let columnSelection = columns.map( (c) => { return {label: c.columnName, show: c.show} })

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
            columns={columnSelection}  />   
      </React.Fragment>
    );
  }
}

export default WeatherTable;
