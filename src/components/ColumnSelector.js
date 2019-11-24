import React, {Component} from 'react';

import Checkbox from 'components/Checkbox'
import 'components/ColumnSelector.css'

class ColumnSelector extends Component {

    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.toggleCheckbox = this.toggleCheckbox.bind(this)  
        this.state = { columns: props.columns}  // working copy
    }

    handleFormSubmit(event){
        event.preventDefault();
        this.props.handleSave(this.state.columns);
    }

    toggleCheckbox = (index) => {
        let work = this.state.columns
        work[index].show = !work[index].show
        this.setState({columns: work})
      }

    render() {
        const { handleCancel, show  } = this.props;
        const { columns } = this.state;
        const showHideClassName = show ? "modal display-block" : "modal display-none";

        return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <form onSubmit={this.handleFormSubmit}>
                {columns.map ( (c,index) => 
                    <Checkbox
                    label={c.label} key={c.label} value={index}
                    handleCheckboxChange={this.toggleCheckbox}
                    isChecked={c.show}
                    />
                )}
                <button className="btn btn-default" type="submit">Save</button>
                </form>
            <p>Select columns here</p>
            <button onClick={handleCancel}>quit</button>
            </section>
        </div>
        );
    }       
} 

export default ColumnSelector;