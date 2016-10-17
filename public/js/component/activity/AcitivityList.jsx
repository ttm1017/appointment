import React, {Component} from 'react';
export default class AcitivityList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activityList } = this.props;
        if (!Array.isArray(activityList)) {
            console.error('activityList must be array.');
            return;
        }
        return (
            <ul className="List">
                {
                    activityList.map((currentValue, index) => (
                        <li key={index}>{currentValue}</li>
                    ))
                }
            </ul>
        )
    }
}