import React, { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { whitevariationSvg, FolderSvg,CircleSvg, GreenSvg, Co2, PiechartSvg, AddIcon, User, Leftarrow, Layer1, Layer2, Layer3, ReducedEmission } from "./../../../assets_re";
import { AuthContext } from '../../contextProvider/AuthContext';
const DataEntryRE = () => {
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlenextpagedataEntryOffset = () => {
    navigate('/dataEntryOffsets');
};
const handlepreviouspagedataEntryOffset = () => {
  navigate('/viewData_elvd');
};

    const [formData, setFormData] = useState({
        year: '',
        // Description:'', 
        // EmissionReduced:'', 
        // FacilityId: '', 
        // Facility:''
    });


    const [rows, setRows] = useState([
        { Description:'', EmissionReduced:'', FacilityId: '', Facility:''},
        { Description:'', EmissionReduced:'', FacilityId: '', Facility:''},
    ]);

 
    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
        '2017-2018',
    ];

    useEffect(() => {
      fetch('http://localhost:5000/api/reducedEmissions')
          .then(response => response.json())
          .then(data => {
              setRows(data);
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleYearChange = (event) => {
      const yearValue = event.target.value;
      setFormData(prevData => ({
          ...prevData,
          year: yearValue
      }));
  };

  const handleInputChange = (index, key, value) => {
      const newRows = [...rows];
      newRows[index][key] = value;
      setRows(newRows);
  };

  const handleAddEntry = (index) => {
      const newRow = rows[index];

      fetch('http://127.0.0.1:8080/reducedemission', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              year: formData.year, 
              description: newRow.Description,
              emissionReduced: newRow.EmissionReduced,
              facilityId: newRow.FacilityId,
              facility: newRow.Facility
          }),
      })
          .then(response => response.json())
          .then(data => {
              const updatedRows = [...rows];
              updatedRows[index] = data;
              setRows(updatedRows);
          })
          .catch(error => console.error('Error adding entry:', error));
  };


  const rowCount = rows.length;

 
      // const handleInputChange = (index, key, value) => {
      //     const newRows = [...rows];
      //     newRows[index][key] = value;
      //     setRows(newRows);
      // };
      
    //   


      const renderDynamicRows = () => {
        return rows.map((rowData, index) => (
            <div className='row-bar-re' key={index}>
                <div className="data-row-re">
                    <input type="text" placeholder="Description of Emission reduction activity" className="mobile-combustion-data-entry-child1-vehicle-re" value={rowData.Description}   onChange={e => handleInputChange(index, 'Description', e.target.value)}/>
                    
                    <input className="mobile-combustion-data-entry-child3-consumption-re" type="text" placeholder="Less Emissions in MTCO2 " value={rowData.EmissionReduced}  onChange={e => handleInputChange(index, 'EmissionReduced', e.target.value)}/>
                    
                    <input className="mobile-combustion-data-entry-child4-si-re" type="text" placeholder="Facility ID" value={rowData.FacilityId} onChange={e => handleInputChange(index, 'FacilityId', e.target.value)}/>
                    <input className="mobile-combustion-data-entry-child2-fuel-re" type="text" placeholder="Facility Name" value={rowData.Facility}  onChange={e => handleInputChange(index, 'Facility', e.target.value)}/>

                    <button className="offsets-page-child15-re" onClick={() => handleAddEntry(index)}>
                    <img className="add-3-icon-re" alt="" src={AddIcon}/>
                    <b className="add-entry2-re" >ADD ENTRY</b>
                    
                    </button>
                    <div className="line-div-re" />
                    
                </div>
            </div>
        ));
    };

    const addRow = () => {
        setRows([...rows,  { Description:'', EmissionReduced:'', FacilityId: '', Facility:''}]);
    };

    return (
      <div>
    {auth.isAuthenticated ? (
        <div className="mobile-combustion-data-entry-re">
           
        <form onSubmit={(e) => e.preventDefault()}>
      <div className="mobile-combustion-data-entry-child-re" />
      <img
        className="white-variation-11-re"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item-re" />
      <img className="user-5-11-re" alt="" src={User}/>
      <img
        className="data-management-1-icon1-re"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1-re"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1-re"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group-re">
        <img className="co21-re" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1-re">
        <div className="">
          <div className="menu-label2-re">
            <div className="menu-label3-re">
            <select
                                    value={formData.year}
                                    onChange={handleYearChange}
                                    className="year-dropdown-re header1-re"
                                >
                                    <option value="">Reporting Year</option>
                                    {yearRanges.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>

                                
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="reporting-year2-re">Reporting Year</div>
      <img
        className="data-management-3-icon1-re"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1-re"
        onClick={handlepreviouspagedataEntryOffset}
        alt=""
        src={Leftarrow}
      />

      <div className="select-month-re">SI Units</div>
      
      <div className="type-of-electricity2-re">Description</div>
      
     
      <div className="fuel1-re">EMISSIONS REDUCED</div>

      <div className="Units-re">FACILITY ID</div>
      <b className="type-of-offset-re">FACILITY</b>
      
      <b className="offsets-re">REDUCED EMISSIONS</b>
      <div className="offsets-page-child24-re" />
      <img
        className="data-management-5-icon-re"
        alt=""
        src={ReducedEmission}
      />

      <img className="vector-icon-re" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13-re"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14-re"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div-re" />
      <div className="mobile-combustion-data-entry-child15-re" />
      <div className="mobile-combustion-data-entry-child16-re" />

      <div className="div-re">-2356</div>
      <div className="mtco2-re">MTCO2</div>

      <div className={`dynamic-rows-container-re ${rowCount > 0 ? 'scrollable-re' : ''}`}>
        <div>
          <div className="dynamic-rows-re">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12-re" onClick={addRow}>
        <img className="add-6-icon-re" alt="" src={AddIcon}/>
        <b className="add-data-re">ADD ROW</b>
      </buton>
      <button className="offsets-page-child15next-re" onClick={handlenextpagedataEntryOffset}>
                    
                    <b className="add-entry2next-re" onClick={handlenextpagedataEntryOffset}>NEXT</b>
                    
                    </button>
    </form>
    </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
    );
};

export default DataEntryRE;
