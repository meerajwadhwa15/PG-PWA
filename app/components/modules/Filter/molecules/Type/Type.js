import { PureComponent } from 'react';
import Button from './../../../../atoms/Button';

class TypeFilter extends PureComponent {

    componentWillMount() {
        let val = this.props.listing_type;
        if(val === 'rent') {
            val = 'Rent';
        } else {
            val = 'Sale';
        }

        this.setState({
            showDropdown: false,
            selectedValue: val,
        });
    }

    toggleDropdown() {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }

    updateSelectedValue(e) {
        const val = e.currentTarget.innerText;
        this.setState({
            showDropdown: false,
            selectedValue: val,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'listing_type',
                value: val.toLowerCase(),
            });
        }
    }

    render() {
        const { showDropdown, selectedValue } = this.state;
        return (<div>
            <Button type="button" onClick={this.toggleDropdown.bind(this)} className="btn btn-default-inverted dropdown-toggle" title={selectedValue} data-toggle="dropdown">
                <span className="btn-label hide">Looking For</span>
                <span className="btn-title">{selectedValue}</span>
            </Button>

            {showDropdown ?
                <ul className="dropdown-menu" style={{display: 'block'}} role="menu">
                    <li className={`${this.props.listing_type === 'sale'? 'active': ''}`}>
                        <a href="javascript: void(0);" onClick={this.updateSelectedValue.bind(this)} className={`${this.props.listing_type === 'sale'? 'selected': ''}`}>Sale</a></li>
                    <li className={`${this.props.listing_type === 'rent'? 'active': ''}`}>
                        <a onClick={this.updateSelectedValue.bind(this)} className={`${this.props.listing_type === 'rent'? 'selected': ''}`} href="javascript: void(0);">Rent</a>
                    </li>
                </ul> :
                null}
        </div>);
    }
}

export default TypeFilter;