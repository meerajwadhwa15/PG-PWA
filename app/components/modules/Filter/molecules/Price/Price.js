import { Fragment, PureComponent } from 'react';
import Button from './../../../../atoms/Button';
class PriceFilter extends PureComponent {
    componentWillMount() {
        this.setState({
            showDropdown: false,
            minPrice: this.props.minprice,
            maxPrice: this.props.maxprice,
            priceValues: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        });
    }

    toggleDropdown() {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }

    updateInputMaxPrice(val) {
        this.setState({
            maxPrice: val,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'maxprice',
                value: val,
            });
        }
    }

    updateInputMinPrice(val) {
        this.setState({
            minPrice: val,
            showDropdown: false,
            maxPrice: null,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'minprice',
                value: val,
            });
            this.props.updateFilter({
                key: 'maxprice',
                value: '',
            });
        }
    }

    updateMaxPrice(e) {
        var val = e.currentTarget.dataset.value;
        this.setState({
            maxPrice: val,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'maxprice',
                value: val,
            });
        }
    }

    updateMinPrice(e) {
        var val = e.currentTarget.dataset.value;
        this.setState({
            minPrice: val,
            showDropdown: false,
            maxPrice: null,
        });

        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'minprice',
                value: val,
            });
            this.props.updateFilter({
                key: 'maxprice',
                value: '',
            });
        }
    }

    render() {
        const { showDropdown, minPrice, maxPrice, priceValues } = this.state;
        return (
    <Fragment>
        <div className="js-form-group btn-group param- tide-to tide-to-listing_type  btn-group-range btn-price-range btn-group-expand-left price-filter" style={{width: '21%'}}>
            <Button type="button" onClick={this.toggleDropdown.bind(this)} className="btn btn-default-inverted dropdown-toggle" data-title="Any Price" title="Any Price" data-toggle="dropdown">
                <span className="btn-label">Price</span>
                <span className="btn-title">{minPrice && maxPrice ? `${minPrice} - ${maxPrice}`: 'Any Price'}</span>
            </Button>

        {showDropdown ?
        <ul className="dropdown-menu" style={{display: 'block'}} role="menu">
            <li className="dropdown-input-range range-min form-group-numeric" data-rangemaxparam="maxprice">
                <input type="text" onChange={(e) => {
                    this.updateInputMinPrice(e.currentTarget.value);
                }} name="minprice" defaultValue={minPrice} className="form-control" placeholder="Min" disabled="" />
            </li>
            <li className="dropdown-input-range range-max form-group-numeric" data-rangeminparam="minprice">
                <input type="text" name="maxprice" onChange={(e) => {
                    this.updateInputMaxPrice(e.currentTarget.value);
                }} defaultValue={maxPrice} className="form-control" placeholder="Max" disabled="" />
            </li>

            {!minPrice?
            <li className="range-options tide-to-focus tide-to-focus-minprice option-range-min" data-rangetype="min" data-tidetofocus="minprice" data-targetname="minprice">
                <ul className="dropdown-menu" style={{display: 'block'}}>
                    <li className="dropdown-reset"><a href="#">No Min</a></li>
                    <li role="presentation" className="divider"></li>

                    {priceValues && priceValues.map((item) => (
                        <li><a  onClick={this.updateMinPrice.bind(this)} href="javascript: void(0)" data-value={item}>S$ {item}</a></li>
                    ))}
                </ul>
            </li>
            : null}

            {(minPrice && !maxPrice)?
            <li className="range-options tide-to-focus tide-to-focus-maxprice option-range-max" data-rangetype="max" data-tidetofocus="maxprice" data-targetname="maxprice">
                <ul className="dropdown-menu" style={{display: 'block'}}>
                    <li className="dropdown-reset"><a href="#">No Max</a></li>
                    <li role="presentation" className="divider"></li>
                    {priceValues && priceValues.map((item) => (
                        <li><a  onClick={this.updateMaxPrice.bind(this)} href="javascript: void(0)" data-value={item}>S$ {item}</a></li>
                    ))}
                </ul>
            </li>: null}
        </ul>: null}
        </div>
  </Fragment>
        );
    }
}

export default PriceFilter;