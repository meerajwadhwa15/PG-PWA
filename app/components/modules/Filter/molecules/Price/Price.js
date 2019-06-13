import { Fragment, PureComponent } from 'react';
import Button from './../../../../atoms/Button';
class PriceFilter extends PureComponent {
    componentWillMount() {
        this.setState({
            showDropdown: false,
            minValue: null,
            maxValue: null
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
            minValue: val,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'price',
                value: {minValue: this.state.minValue, maxValue: this.state.maxValue},
            });
        }
    }

    render() {
        const { showDropdown, minValue, maxValue } = this.state;
        return (
    <Fragment>
        <div className="js-form-group btn-group param- tide-to tide-to-listing_type  btn-group-range btn-price-range btn-group-expand-left">
            <Button type="button" onClick={this.toggleDropdown.bind(this)} className="btn btn-default-inverted dropdown-toggle" data-title="Any Price" title="Any Price" data-toggle="dropdown">
                <span className="btn-label">Price</span>
                <span className="btn-title">Any Price</span>
            </Button>

        {showDropdown ?
        <ul className="dropdown-menu" style={{display: 'block'}} role="menu">
            <li className="dropdown-input-range range-min form-group-numeric" data-rangemaxparam="maxprice">
                <input type="text" name="minprice" value="" className="form-control" placeholder="Min" disabled="" />
            </li>
            <li className="dropdown-input-range range-max form-group-numeric" data-rangeminparam="minprice">
                <input type="text" name="maxprice" value="" className="form-control" placeholder="Max" disabled="" />
            </li>

            <li className="range-options tide-to-focus tide-to-focus-minprice option-range-min" data-rangetype="min" data-tidetofocus="minprice" data-targetname="minprice">
                <ul className="dropdown-menu" style={{display: 'block'}}>
                    <li className="dropdown-reset"><a href="#">No Min</a></li>
                    <li role="presentation" className="divider"></li>
                    <li><a href="#500">S$ 500</a></li>
                    <li><a href="#1000">S$ 1,000</a></li>
                    <li><a href="#1500">S$ 1,500</a></li>
                    <li><a href="#2000">S$ 2,000</a></li>
                    <li><a href="#2500">S$ 2,500</a></li>
                    <li><a href="#3000">S$ 3,000</a></li>
                    <li><a href="#3500">S$ 3,500</a></li>
                    <li><a href="#4000">S$ 4,000</a></li>
                    <li><a href="#5000">S$ 5,000</a></li>
                    <li><a href="#6000">S$ 6,000</a></li>
                    <li><a href="#7000">S$ 7,000</a></li>
                    <li><a href="#8000">S$ 8,000</a></li>
                    <li><a href="#9000">S$ 9,000</a></li>
                    <li><a href="#10000">S$ 10,000</a></li>
                    <li><a href="#12000">S$ 12,000</a></li>
                    <li><a href="#15000">S$ 15,000</a></li>
                    <li><a href="#20000">S$ 20,000</a></li>
                    <li><a href="#30000">S$ 30,000</a></li>
                    <li><a href="#40000">S$ 40,000</a></li>
                    <li><a href="#50000">S$ 50,000</a></li>
                </ul>
            </li>
            <li className="range-options tide-to-focus tide-to-focus-maxprice option-range-max" data-rangetype="max" data-tidetofocus="maxprice" data-targetname="maxprice">
                <ul className="dropdown-menu" style={{display: 'block'}}>
                    <li className="dropdown-reset"><a href="#">No Max</a></li>
                    <li role="presentation" className="divider"></li>
                    <li><a href="#500">S$ 500</a></li>
                    <li><a href="#1000">S$ 1,000</a></li>
                    <li><a href="#1500">S$ 1,500</a></li>
                    <li><a href="#2000">S$ 2,000</a></li>
                    <li><a href="#2500">S$ 2,500</a></li>
                    <li><a href="#3000">S$ 3,000</a></li>
                    <li><a href="#3500">S$ 3,500</a></li>
                    <li><a href="#4000">S$ 4,000</a></li>
                    <li><a href="#5000">S$ 5,000</a></li>
                    <li><a href="#6000">S$ 6,000</a></li>
                    <li><a href="#7000">S$ 7,000</a></li>
                    <li><a href="#8000">S$ 8,000</a></li>
                    <li><a href="#9000">S$ 9,000</a></li>
                    <li><a href="#10000">S$ 10,000</a></li>
                    <li><a href="#12000">S$ 12,000</a></li>
                    <li><a href="#15000">S$ 15,000</a></li>
                    <li><a href="#20000">S$ 20,000</a></li>
                    <li><a href="#30000">S$ 30,000</a></li>
                    <li><a href="#40000">S$ 40,000</a></li>
                    <li><a href="#50000">S$ 50,000</a></li>
                </ul>
            </li>
        </ul>: null}
        </div>
  </Fragment>
        );
    }
}

export default PriceFilter;