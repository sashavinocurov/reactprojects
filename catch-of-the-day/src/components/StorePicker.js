import React from 'react';
import PropTypes from 'prop-types';

import { getFunName } from "../helpers";


class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    //     //over-wright the method and will attach the binding to it.
    //     //constructor could be messy if there is alot of pages.
    // }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }
    render () {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    { /* comment should be inside return element */}
                    <h2> Please Enter A Store </h2>
                    <input
                        type="text" 
                        ref={this.myInput}
                        required
                        placeholder="Store Name" 
                        defaultValue= {getFunName()}/>
                    <button type ="submit"> Visit Store </button>
                </form>
            </React.Fragment>
        )
    }
}


export default StorePicker;
