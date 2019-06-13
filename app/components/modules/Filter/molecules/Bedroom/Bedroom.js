const BedroomFilter = () => (

    <div className="expanded-col expanded-1"><fieldset className="container">
        <h3 className="box-title">Bathrooms</h3>
        <div className="js-form-group form-group form-group-numeric tide-to tide-to-market" data-tideto="market" data-tidetowhen="residential" data-value-default="0">
            <div className="btn-group" data-gentitle-full="%1+ Bathrooms">
                <button className="btn btn-default-inverted" type="button">-</button>
                <input type="text" className="form-control" name="minbath" value="0" data-gentitle="%1+ Bathrooms" />
                <button className="btn btn-default-inverted" type="button">+</button>
            </div>
        </div>

    </fieldset>
    </div>
);

export default BedroomFilter;