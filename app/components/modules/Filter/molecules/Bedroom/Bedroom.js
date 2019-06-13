import { PureComponent } from 'react';
import styled from 'styled-components';
import Styles from './Bedroom.style';
import Button from './../../../../atoms/Button';

class BedroomFilter extends PureComponent {
    componentWillMount() {
        this.setState({
            value: 0
        });
    }

    decreaseCount() {
        if (this.state.value > 0) {
            this.setState({
                value: this.state.value - 1
            });
            this.update();
        }
    }

    increaseCount() {
        this.setState({
            value: this.state.value + 1
        });
        this.update();
    }

    update() {
        if(this.props.updateFilter) {
            this.props.updateFilter({
                key: 'bedroom',
                value: this.state.value,
            });
        }
    }

    render() {
        const { className } = this.props;
        const { value } = this.state;
        return (<div className={`expanded-col expanded-1 ${className}`}>
            <fieldset className="container">
                <div className="box-title">Bathrooms</div>
                <div data-tideto="market" data-tidetowhen="residential" data-value-default="0">
                    <div className="btn-group" data-gentitle-full="%1+ Bathrooms">
                        <Button onClick={this.decreaseCount.bind(this)} className="btn btn-default-inverted" type="button">-</Button>
                        <input type="text" className="form-control" name="minbath" value={value} />
                        <Button onClick={this.increaseCount.bind(this)} className="btn btn-default-inverted" type="button">+</Button>
                    </div>
                </div>
            </fieldset>
        </div>
        );
    }
}

export default styled(BedroomFilter)(Styles);