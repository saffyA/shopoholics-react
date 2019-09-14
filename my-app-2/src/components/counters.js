import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{

    render()
    {
        const { onReset, counters, onIncrement, onDelete} = this.props;
        return (<React.Fragment>
        <button className="btn btn-primary m-2" onClick={onReset}>Reset</button><br />
        { counters.map( counter => 
            <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter} />) }
        </React.Fragment>);
    }

}

export default Counters;