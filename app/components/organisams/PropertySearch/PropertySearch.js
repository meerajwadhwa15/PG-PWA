const PropertySearch = () => (
    <div className="searchbox-container">
      <form className="searchbox hasExpanded property-search is-old-brand-search searchbox-singleline clearfix searchbox-sticky" role="search" id="searchbox-n1">
        <fieldset className="container">
          <h1 className="title-big searchbox-explore">Singapore Property Search</h1>
          <div className="sticky-container">
            <div className="inner-container">
              <div className="form-group search-box-parameters search-box-query searchbox-hidden-xs clearfix">
                <div className="input-group">
                  <div className="js-form-group btn-group param-listing_type btn-group-expand-right js-has-value" data-gentitle="">
                    <button type="button" className="btn btn-default-inverted dropdown-toggle" data-title="Buy" title="Buy" data-toggle="dropdown">
                      <span className="btn-label">Looking For</span>
                      <span className="btn-title">Buy</span>
                    </button>

                    <ul className="dropdown-menu" role="menu">
                      <li className="active"><a href="#sale" className="selected">Buy</a></li>
                      <li><a href="#rent">Rent</a></li>
                    </ul><input type="hidden" name="listing_type" value="sale" /></div>
                  <div className="js-form-group btn-group param-property_type btn-group-expand-right" data-gentitle=""><button type="button" className="btn btn-default-inverted dropdown-toggle" data-title="Residential" title="Residential" data-toggle="dropdown"><span className="btn-label">Property Type</span><span className="btn-title">Residential</span></button><ul className="dropdown-menu has-select-all" role="menu">
                    <li data-toggle="buttons">
                      <div className="btn-group form-group dropdown-input-toggle dropdown-input-toggle-market">
                        <label className="btn active"><input type="radio" name="market" value="residential" checked="checked" data-toggle="button" title="" />Residential</label>
                      </div>
                    </li>
                    <li className="dropdown-reset"><a href="#">Residential</a></li>
                    <li role="presentation" className="divider"></li>
                    <li className="tide-to tide-to-market" data-tideto="market" data-tidetowhen="residential">
                      <a href="#N">Condo</a>
                      <ul className="sub-dropdown-menu">
                        <li className="select-all">
                          <label>
                            <input type="checkbox" className="select-all-input" value="" checked="checked" />
                            <span className="sel">Select all</span>
                            <span className="unsel">Unselect all</span>
                          </label>
                        </li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="CONDO" />Condominium</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="APT" />Apartment</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="WALK" />Walk-up</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="CLUS" />Cluster House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="EXCON" />Executive Condominium</label></li>
                      </ul>
                    </li>
                    <li className="tide-to tide-to-market" data-tideto="market" data-tidetowhen="residential">
                      <a href="#L">Landed</a>
                      <ul className="sub-dropdown-menu">
                        <li className="select-all"><label><input type="checkbox" className="select-all-input" value="" checked="checked" />
                          <span className="sel">Select all</span>
                          <span className="unsel">Unselect all</span>
                        </label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="TERRA" />Terraced House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="DETAC" />Detached House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="SEMI" />Semi-Detached House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="CORN" />Corner Terrace</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="LBUNG" />Bungalow House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="BUNG" />Good Class Bungalow</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="SHOPH" />Shophouse</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="RLAND" />Land Only</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="TOWN" />Town House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="CON" />Conservation House</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="LCLUS" />Cluster House</label></li>
                      </ul>
                    </li>
                    <li className="tide-to tide-to-market" data-tideto="market" data-tidetowhen="residential">
                      <a href="#H">HDB</a>
                      <ul className="sub-dropdown-menu">
                        <li className="select-all"><label><input type="checkbox" className="select-all-input" value="" checked="checked" />
                          <span className="sel">Select all</span>
                          <span className="unsel">Unselect all</span>
                        </label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="1R" />1-Room/Studio</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="2A" />2A</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="2I" />2I (Improved)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="2S" />2S (Standard)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3A" />3A</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3NG" />3NG (New Generation)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3Am" />3A (Modified)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3NGm" />3NG (Modified)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3I" />3I (Improved)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3Im" />3I (Modified)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3S" />3S (Simplified)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="3STD" />3STD (Standard)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="4A" />4A</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="4NG" />4NG (New Generation)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="4S" />4S (Simplified)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="4I" />4I (Improved)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="4STD" />4STD (Standard)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="5A" />5A</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="5I" />5I</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="5S" />5S</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="6J" />Jumbo</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="EA" />EA (Exec Apartment)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="EM" />EM (Exec Maisonette)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="MG" />MG (Multi-Generation)</label></li>
                        <li><label><input type="checkbox" name="property_type_code[]" value="TE" />Terrace</label></li>
                      </ul>
                    </li>
                  </ul><input type="hidden" name="property_type" value="" /></div>
                  <span className="twitter-typeahead">
                    <input type="text" className="form-control freetext-input tt-hint" value="" autocomplete="off" readonly="" spellcheck="false" tabindex="-1" dir="ltr" />
                    <input name="freetext" type="text" className="form-control freetext-input tt-input" value="" placeholder="Type or Select Location" autocomplete="off" spellcheck="false" dir="auto" />
                    <pre aria-hidden="true" ></pre>
                    <div className="tt-menu" ><div className="tt-dataset tt-dataset-previousSearches"></div><div className="tt-dataset tt-dataset-autocompletedefaults"></div><div className="tt-dataset tt-dataset-autocomplete"></div></div></span>

                  <div className="js-form-group btn-group form-group-multi-step no-arrow form-group-location  tide-to tide-to-property_type" data-tideto="property_type" data-tidetowhen="!H" title="Select a location here" data-toggle="tooltip"><button type="button" className="btn btn-default-inverted dropdown-toggle dropdown-no-chevron" data-title="Location" title="Location" data-toggle="dropdown"><i className="pgicon pgicon-menu"></i></button><div className="dropdown-menu dropdown-multi-step dropdown-menu-right" role="menu"><div className="step-pane param-district_code step-pane-last">
                    <ul className="step-options">
                      <li className="dropdown-reset"><a href="#">All Districts</a></li>
                      <li role="presentation" className="divider"></li>


                      <li title="D01 Boat Quay / Raffles Place / Marina"><label><input type="checkbox" name="district_code[]" value="D01" autocomplete="off" title="D01 Boat Quay / Raffles Place / Marina" />D01 Boat Quay / Raffles Place / Marina</label></li>
                      <li title="D02 Chinatown / Tanjong Pagar"><label><input type="checkbox" name="district_code[]" value="D02" autocomplete="off" title="D02 Chinatown / Tanjong Pagar" />D02 Chinatown / Tanjong Pagar</label></li>
                      <li title="D03 Alexandra / Commonwealth"><label><input type="checkbox" name="district_code[]" value="D03" autocomplete="off" title="D03 Alexandra / Commonwealth" />D03 Alexandra / Commonwealth</label></li>
                      <li title="D04 Harbourfront / Telok Blangah"><label><input type="checkbox" name="district_code[]" value="D04" autocomplete="off" title="D04 Harbourfront / Telok Blangah" />D04 Harbourfront / Telok Blangah</label></li>
                      <li title="D05 Buona Vista / West Coast / Clementi New Town"><label><input type="checkbox" name="district_code[]" value="D05" autocomplete="off" title="D05 Buona Vista / West Coast / Clementi New Town" />D05 Buona Vista / West Coast / Clementi New Town</label></li>
                      <li title="D06 City Hall / Clarke Quay"><label><input type="checkbox" name="district_code[]" value="D06" autocomplete="off" title="D06 City Hall / Clarke Quay" />D06 City Hall / Clarke Quay</label></li>
                      <li title="D07 Beach Road / Bugis / Rochor"><label><input type="checkbox" name="district_code[]" value="D07" autocomplete="off" title="D07 Beach Road / Bugis / Rochor" />D07 Beach Road / Bugis / Rochor</label></li>
                      <li title="D08 Farrer Park / Serangoon Rd"><label><input type="checkbox" name="district_code[]" value="D08" autocomplete="off" title="D08 Farrer Park / Serangoon Rd" />D08 Farrer Park / Serangoon Rd</label></li>
                      <li title="D09 Orchard / River Valley"><label><input type="checkbox" name="district_code[]" value="D09" autocomplete="off" title="D09 Orchard / River Valley" />D09 Orchard / River Valley</label></li>
                      <li title="D10 Tanglin / Holland / Bukit Timah"><label><input type="checkbox" name="district_code[]" value="D10" autocomplete="off" title="D10 Tanglin / Holland / Bukit Timah" />D10 Tanglin / Holland / Bukit Timah</label></li>
                      <li title="D11 Newton / Novena"><label><input type="checkbox" name="district_code[]" value="D11" autocomplete="off" title="D11 Newton / Novena" />D11 Newton / Novena</label></li>
                      <li title="D12 Balestier / Toa Payoh"><label><input type="checkbox" name="district_code[]" value="D12" autocomplete="off" title="D12 Balestier / Toa Payoh" />D12 Balestier / Toa Payoh</label></li>
                      <li title="D13 Macpherson / Potong Pasir"><label><input type="checkbox" name="district_code[]" value="D13" autocomplete="off" title="D13 Macpherson / Potong Pasir" />D13 Macpherson / Potong Pasir</label></li>
                      <li title="D14 Eunos / Geylang / Paya Lebar"><label><input type="checkbox" name="district_code[]" value="D14" autocomplete="off" title="D14 Eunos / Geylang / Paya Lebar" />D14 Eunos / Geylang / Paya Lebar</label></li>
                      <li title="D15 East Coast / Marine Parade"><label><input type="checkbox" name="district_code[]" value="D15" autocomplete="off" title="D15 East Coast / Marine Parade" />D15 East Coast / Marine Parade</label></li>
                      <li title="D16 Bedok / Upper East Coast"><label><input type="checkbox" name="district_code[]" value="D16" autocomplete="off" title="D16 Bedok / Upper East Coast" />D16 Bedok / Upper East Coast</label></li>
                      <li title="D17 Changi Airport / Changi Village"><label><input type="checkbox" name="district_code[]" value="D17" autocomplete="off" title="D17 Changi Airport / Changi Village" />D17 Changi Airport / Changi Village</label></li>
                      <li title="D18 Pasir Ris / Tampines"><label><input type="checkbox" name="district_code[]" value="D18" autocomplete="off" title="D18 Pasir Ris / Tampines" />D18 Pasir Ris / Tampines</label></li>
                      <li title="D19 Hougang / Punggol / Sengkang"><label><input type="checkbox" name="district_code[]" value="D19" autocomplete="off" title="D19 Hougang / Punggol / Sengkang" />D19 Hougang / Punggol / Sengkang</label></li>
                      <li title="D20 Ang Mo Kio / Bishan / Thomson"><label><input type="checkbox" name="district_code[]" value="D20" autocomplete="off" title="D20 Ang Mo Kio / Bishan / Thomson" />D20 Ang Mo Kio / Bishan / Thomson</label></li>
                      <li title="D21 Clementi Park / Upper Bukit Timah"><label><input type="checkbox" name="district_code[]" value="D21" autocomplete="off" title="D21 Clementi Park / Upper Bukit Timah" />D21 Clementi Park / Upper Bukit Timah</label></li>
                      <li title="D22 Boon Lay / Jurong / Tuas"><label><input type="checkbox" name="district_code[]" value="D22" autocomplete="off" title="D22 Boon Lay / Jurong / Tuas" />D22 Boon Lay / Jurong / Tuas</label></li>
                      <li title="D23 Dairy Farm / Bukit Panjang / Choa Chu Kang"><label><input type="checkbox" name="district_code[]" value="D23" autocomplete="off" title="D23 Dairy Farm / Bukit Panjang / Choa Chu Kang" />D23 Dairy Farm / Bukit Panjang / Choa Chu Kang</label></li>
                      <li title="D24 Lim Chu Kang / Tengah"><label><input type="checkbox" name="district_code[]" value="D24" autocomplete="off" title="D24 Lim Chu Kang / Tengah" />D24 Lim Chu Kang / Tengah</label></li>
                      <li title="D25 Admiralty / Woodlands"><label><input type="checkbox" name="district_code[]" value="D25" autocomplete="off" title="D25 Admiralty / Woodlands" />D25 Admiralty / Woodlands</label></li>
                      <li title="D26 Mandai / Upper Thomson"><label><input type="checkbox" name="district_code[]" value="D26" autocomplete="off" title="D26 Mandai / Upper Thomson" />D26 Mandai / Upper Thomson</label></li>
                      <li title="D27 Sembawang / Yishun"><label><input type="checkbox" name="district_code[]" value="D27" autocomplete="off" title="D27 Sembawang / Yishun" />D27 Sembawang / Yishun</label></li>
                      <li title="D28 Seletar / Yio Chu Kang"><label><input type="checkbox" name="district_code[]" value="D28" autocomplete="off" title="D28 Seletar / Yio Chu Kang" />D28 Seletar / Yio Chu Kang</label></li>

                    </ul></div></div></div>
                  <div className="js-form-group btn-group form-group-multi-step no-arrow form-group-location  hide tide-to tide-to-property_type" data-tideto="property_type" data-tidetowhen="H"><button type="button" className="btn btn-default-inverted dropdown-toggle dropdown-no-chevron" data-title="HDB" title="HDB" data-toggle="dropdown"><i className="pgicon pgicon-menu"></i></button><div className="dropdown-menu dropdown-multi-step dropdown-menu-right" role="menu"><div className="step-pane param-hdb_estate step-pane-last">
                    <ul className="step-options">
                      <li className="dropdown-reset"><a href="#">All HDB Estates</a></li>
                      <li role="presentation" className="divider"></li>


                      <li title="Ang Mo Kio"><label><input type="checkbox" name="hdb_estate[]" value="1" autocomplete="off" title="Ang Mo Kio" disabled="" />Ang Mo Kio</label></li>
                      <li title="Bedok"><label><input type="checkbox" name="hdb_estate[]" value="2" autocomplete="off" title="Bedok" disabled="" />Bedok</label></li>
                      <li title="Bishan"><label><input type="checkbox" name="hdb_estate[]" value="3" autocomplete="off" title="Bishan" disabled="" />Bishan</label></li>
                      <li title="Bukit Batok"><label><input type="checkbox" name="hdb_estate[]" value="4" autocomplete="off" title="Bukit Batok" disabled="" />Bukit Batok</label></li>
                      <li title="Bukit Merah"><label><input type="checkbox" name="hdb_estate[]" value="5" autocomplete="off" title="Bukit Merah" disabled="" />Bukit Merah</label></li>
                      <li title="Bukit Panjang"><label><input type="checkbox" name="hdb_estate[]" value="6" autocomplete="off" title="Bukit Panjang" disabled="" />Bukit Panjang</label></li>
                      <li title="Bukit Timah"><label><input type="checkbox" name="hdb_estate[]" value="7" autocomplete="off" title="Bukit Timah" disabled="" />Bukit Timah</label></li>
                      <li title="Central Area"><label><input type="checkbox" name="hdb_estate[]" value="8" autocomplete="off" title="Central Area" disabled="" />Central Area</label></li>
                      <li title="Choa Chu Kang"><label><input type="checkbox" name="hdb_estate[]" value="9" autocomplete="off" title="Choa Chu Kang" disabled="" />Choa Chu Kang</label></li>
                      <li title="Clementi"><label><input type="checkbox" name="hdb_estate[]" value="10" autocomplete="off" title="Clementi" disabled="" />Clementi</label></li>
                      <li title="Geylang"><label><input type="checkbox" name="hdb_estate[]" value="11" autocomplete="off" title="Geylang" disabled="" />Geylang</label></li>
                      <li title="Hougang"><label><input type="checkbox" name="hdb_estate[]" value="12" autocomplete="off" title="Hougang" disabled="" />Hougang</label></li>
                      <li title="Jurong East"><label><input type="checkbox" name="hdb_estate[]" value="13" autocomplete="off" title="Jurong East" disabled="" />Jurong East</label></li>
                      <li title="Jurong West"><label><input type="checkbox" name="hdb_estate[]" value="14" autocomplete="off" title="Jurong West" disabled="" />Jurong West</label></li>
                      <li title="Kallang/Whampoa"><label><input type="checkbox" name="hdb_estate[]" value="15" autocomplete="off" title="Kallang/Whampoa" disabled="" />Kallang/Whampoa</label></li>
                      <li title="Lim Chu Kang"><label><input type="checkbox" name="hdb_estate[]" value="16" autocomplete="off" title="Lim Chu Kang" disabled="" />Lim Chu Kang</label></li>
                      <li title="Marine Parade"><label><input type="checkbox" name="hdb_estate[]" value="17" autocomplete="off" title="Marine Parade" disabled="" />Marine Parade</label></li>
                      <li title="Pasir Ris"><label><input type="checkbox" name="hdb_estate[]" value="18" autocomplete="off" title="Pasir Ris" disabled="" />Pasir Ris</label></li>
                      <li title="Punggol"><label><input type="checkbox" name="hdb_estate[]" value="19" autocomplete="off" title="Punggol" disabled="" />Punggol</label></li>
                      <li title="Queenstown"><label><input type="checkbox" name="hdb_estate[]" value="20" autocomplete="off" title="Queenstown" disabled="" />Queenstown</label></li>
                      <li title="Sembawang"><label><input type="checkbox" name="hdb_estate[]" value="21" autocomplete="off" title="Sembawang" disabled="" />Sembawang</label></li>
                      <li title="Sengkang"><label><input type="checkbox" name="hdb_estate[]" value="22" autocomplete="off" title="Sengkang" disabled="" />Sengkang</label></li>
                      <li title="Serangoon"><label><input type="checkbox" name="hdb_estate[]" value="23" autocomplete="off" title="Serangoon" disabled="" />Serangoon</label></li>
                      <li title="Tampines"><label><input type="checkbox" name="hdb_estate[]" value="24" autocomplete="off" title="Tampines" disabled="" />Tampines</label></li>
                      <li title="Toa Payoh"><label><input type="checkbox" name="hdb_estate[]" value="25" autocomplete="off" title="Toa Payoh" disabled="" />Toa Payoh</label></li>
                      <li title="Woodlands"><label><input type="checkbox" name="hdb_estate[]" value="26" autocomplete="off" title="Woodlands" disabled="" />Woodlands</label></li>
                      <li title="Yishun"><label><input type="checkbox" name="hdb_estate[]" value="27" autocomplete="off" title="Yishun" disabled="" />Yishun</label></li>

                    </ul></div></div></div>
                  <div className="js-form-group btn-group param- hide tide-to tide-to-listing_type  searchbox-hidden-xs btn-group-range btn-price-range btn-group-expand-left" data-gentitle-min="Min S$ %1" data-gentitle-max="Max S$ %1" data-gentitle-range="S$ %1" data-gentitle-range-separator=" - " data-tideto="listing_type" data-tidetowhen="rent" data-gentitle=""><button type="button" className="btn btn-default-inverted dropdown-toggle" data-title="Any Price" title="Any Price" data-toggle="dropdown"><span className="btn-label">Price</span><span className="btn-title">Any Price</span></button><ul className="dropdown-menu" role="menu">
                    <li className="dropdown-input-range range-min form-group-numeric" data-rangemaxparam="maxprice">
                      <input type="text" name="minprice" value="" className="form-control" placeholder="Min" disabled="" />
                    </li>
                    <li className="dropdown-input-range range-max form-group-numeric" data-rangeminparam="minprice">
                      <input type="text" name="maxprice" value="" className="form-control" placeholder="Max" disabled="" />
                    </li>






                    <li className="range-options hide tide-to-focus tide-to-focus-minprice option-range-min" data-rangetype="min" data-tidetofocus="minprice" data-targetname="minprice">
                      <ul className="dropdown-menu">
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
                    <li className="range-options hide tide-to-focus tide-to-focus-maxprice option-range-max" data-rangetype="max" data-tidetofocus="maxprice" data-targetname="maxprice">
                      <ul className="dropdown-menu">
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


                  </ul><input type="hidden" name="" value="" disabled="" /></div>
                  <div className="js-form-group btn-group param- tide-to tide-to-listing_type  searchbox-hidden-xs btn-group-range btn-price-range btn-group-expand-left" data-gentitle-min="Min S$ %1" data-gentitle-max="Max S$ %1" data-gentitle-range="S$ %1" data-gentitle-range-separator=" - " data-tideto="listing_type" data-tidetowhen="sale,auction,opt" data-gentitle=""><button type="button" className="btn btn-default-inverted dropdown-toggle" data-title="Any Price" title="Any Price" data-toggle="dropdown"><span className="btn-label">Price</span><span className="btn-title">Any Price</span></button><ul className="dropdown-menu" role="menu">
                    <li className="dropdown-input-range range-min form-group-numeric" data-rangemaxparam="maxprice">
                      <input type="text" name="minprice" value="" className="form-control" placeholder="Min" />
                    </li>
                    <li className="dropdown-input-range range-max form-group-numeric" data-rangeminparam="minprice">
                      <input type="text" name="maxprice" value="" className="form-control" placeholder="Max" />
                    </li>



                    <li className="range-options hide tide-to-focus tide-to-focus-minprice option-range-min" data-rangetype="min" data-tidetofocus="minprice" data-targetname="minprice">
                      <ul className="dropdown-menu">
                        <li className="dropdown-reset"><a href="#">No Min</a></li>
                        <li role="presentation" className="divider"></li>
                        <li><a href="#200000">S$ 200,000</a></li>
                        <li><a href="#300000">S$ 300,000</a></li>
                        <li><a href="#400000">S$ 400,000</a></li>
                        <li><a href="#500000">S$ 500,000</a></li>
                        <li><a href="#600000">S$ 600,000</a></li>
                        <li><a href="#700000">S$ 700,000</a></li>
                        <li><a href="#800000">S$ 800,000</a></li>
                        <li><a href="#900000">S$ 900,000</a></li>
                        <li><a href="#1000000">S$ 1,000,000</a></li>
                        <li><a href="#1250000">S$ 1,250,000</a></li>
                        <li><a href="#1500000">S$ 1,500,000</a></li>
                        <li><a href="#2000000">S$ 2,000,000</a></li>
                        <li><a href="#2500000">S$ 2,500,000</a></li>
                        <li><a href="#3000000">S$ 3,000,000</a></li>
                        <li><a href="#4000000">S$ 4,000,000</a></li>
                        <li><a href="#5000000">S$ 5,000,000</a></li>
                        <li><a href="#6000000">S$ 6,000,000</a></li>
                        <li><a href="#8000000">S$ 8,000,000</a></li>
                        <li><a href="#10000000">S$ 10,000,000</a></li>
                        <li><a href="#15000000">S$ 15,000,000</a></li>
                        <li><a href="#20000000">S$ 20,000,000</a></li>
                        <li><a href="#30000000">S$ 30,000,000</a></li>
                        <li><a href="#50000000">S$ 50,000,000</a></li>
                      </ul>
                    </li>
                    <li className="range-options hide tide-to-focus tide-to-focus-maxprice option-range-max" data-rangetype="max" data-tidetofocus="maxprice" data-targetname="maxprice">
                      <ul className="dropdown-menu">
                        <li className="dropdown-reset"><a href="#">No Max</a></li>
                        <li role="presentation" className="divider"></li>
                        <li><a href="#200000">S$ 200,000</a></li>
                        <li><a href="#300000">S$ 300,000</a></li>
                        <li><a href="#400000">S$ 400,000</a></li>
                        <li><a href="#500000">S$ 500,000</a></li>
                        <li><a href="#600000">S$ 600,000</a></li>
                        <li><a href="#700000">S$ 700,000</a></li>
                        <li><a href="#800000">S$ 800,000</a></li>
                        <li><a href="#900000">S$ 900,000</a></li>
                        <li><a href="#1000000">S$ 1,000,000</a></li>
                        <li><a href="#1250000">S$ 1,250,000</a></li>
                        <li><a href="#1500000">S$ 1,500,000</a></li>
                        <li><a href="#2000000">S$ 2,000,000</a></li>
                        <li><a href="#2500000">S$ 2,500,000</a></li>
                        <li><a href="#3000000">S$ 3,000,000</a></li>
                        <li><a href="#4000000">S$ 4,000,000</a></li>
                        <li><a href="#5000000">S$ 5,000,000</a></li>
                        <li><a href="#6000000">S$ 6,000,000</a></li>
                        <li><a href="#8000000">S$ 8,000,000</a></li>
                        <li><a href="#10000000">S$ 10,000,000</a></li>
                        <li><a href="#15000000">S$ 15,000,000</a></li>
                        <li><a href="#20000000">S$ 20,000,000</a></li>
                        <li><a href="#30000000">S$ 30,000,000</a></li>
                        <li><a href="#50000000">S$ 50,000,000</a></li>
                      </ul>
                    </li>
                  </ul>

                </div><div className="expanded-col expanded-1"><fieldset className="container">
                  <h3 className="box-title">Bathrooms</h3>
                  <div className="js-form-group form-group form-group-numeric tide-to tide-to-market" data-tideto="market" data-tidetowhen="residential" data-value-default="0">
                    <div className="btn-group" data-gentitle-full="%1+ Bathrooms">
                      <button className="btn btn-default-inverted" type="button">-</button>
                      <input type="text" className="form-control" name="minbath" value="0" data-gentitle="%1+ Bathrooms" />
                      <button className="btn btn-default-inverted" type="button">+</button>
                    </div>
                  </div>
                  <span className="input-group-btn">
                              <button className="btn btn-primary btn-submit" type="submit" data-title="refined">
                                  Search
                              </button>
                          </span>

                </fieldset>
                </div>
              </div>
            </div>
            </div>
            </div>
            </fieldset>
  </form>
  </div>
        );

        export default PropertySearch;
