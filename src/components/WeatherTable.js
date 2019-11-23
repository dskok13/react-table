import React from 'react';

import ReactTable from "react-table";
import 'react-table/react-table.css'

export class WeatherTable extends React.Component {
  columns = [
    { Header: 'City', accessor: 'city'},
    { Header: () => (
        <div style={{ textAlign: "center" }}>Low °F</div>
      ),
      accessor: 'low', 
      Cell: row => (
        <div style={{ textAlign: "center" }}>{row.value}</div>
      )
    },
    { Header: () => (
        <div style={{ textAlign: "center" }}>High °F</div>
      ),
      accessor: 'high',             
      Cell: row => (
        <div style={{ textAlign: "center" }}>{row.value}</div>
      )
    },
    { Header: 'Forecast', accessor: 'forecast' },
  ]

  render() {
    const {data} = this.props;

    return (
      <React.Fragment>
          <ReactTable
            data={data}
            columns={this.columns}
            showPagination={false}
          /> 
      </React.Fragment>
    );
  }
}

export default WeatherTable;
