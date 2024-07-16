import React, { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthContext';
import { whitevariationSvg, FolderSvg,Offsets, CircleSvg, GreenSvg, Co2, PiechartSvg, AddIcon, User, Leftarrow, Layer1, Layer2, Layer3 } from "../../../assets_offsets";

const DataEntryOffsets = () => {
    
  // eslint-disable-next-line
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
    const handlepreviouspagedataentryRE = () => {
    navigate('/dataEntryRE');
};

const handleNextTarget= () => {
  navigate('/notarget');
};
    const [formData, setFormData] = useState({
        year: '',
    });


    const [rows, setRows] = useState([
        { Description:'', EmissionOffset:'', Location: '', TypeofOffset:''},
        { Description:'', EmissionOffset:'', Location: '', TypeofOffset:''},
    ]);

 
    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
        '2017-2018',
    ];




      
      const handleYearChange = (event) => {
        const yearValue = event.target.value;
        setFormData(prevData => ({
            ...prevData,
            year: yearValue
        }));
    };
    
    useEffect(() => {
      fetch('http://localhost:5000/api/reducedEmissions')
          .then(response => response.json())
          .then(data => {
              setRows(data);
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);



  const handleInputChange = (index, key, value) => {
      const newRows = [...rows];
      newRows[index][key] = value;
      setRows(newRows);
  };

  const handleAddEntry = (index) => {
      const newRow = rows[index];

      fetch('http://127.0.0.1:8080/offset', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              year: formData.year, 
              description: newRow.Description,
              emissionReduced: newRow.EmissionOffset,
              location: newRow.Location,
              typeofOffset: newRow.TypeofOffset
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
            <div className='row-bar-off' key={index}>
                <div className="data-row-off">
                    <input type="text" placeholder="Description of Project" className="mobile-combustion-data-entry-child1-vehicle-off" value={rowData.Description}   onChange={e => handleInputChange(index, 'Description', e.target.value)}/>
                    
                    <input className="mobile-combustion-data-entry-child3-consumption-off" type="text" placeholder="Less Emissions in MTCO2 " value={rowData.EmissionOffset}   onChange={e => handleInputChange(index, 'EmissionOffset', e.target.value)}/>
                    
                    <input className="mobile-combustion-data-entry-child4-si-off" type="text" placeholder="Location Offset Carried out" value={rowData.Location}  onChange={e => handleInputChange(index, 'Location', e.target.value)}/>
                    <input className="mobile-combustion-data-entry-child2-fuel-off" type="text" placeholder="Select type of Offset" value={rowData.TypeofOffset}  onChange={e => handleInputChange(index, 'TypeofOffset', e.target.value)} />

                    <button className="offsets-page-child15-off" onClick={() => handleAddEntry(index)}>
                    <img className="add-3-icon-off" alt="" src={AddIcon}/>
                    <b className="add-entry2-off">ADD ENTRY</b>
                    
                    </button>
                    <div className="line-div-off" />
                    
                </div>
            </div>
        ));
    };

    const addRow = () => {
        setRows([...rows,  { Description:'', EmissionOffset:'', Location: '', TypeofOffset:''}]);
    };

    return (
      <div>
    {auth.isAuthenticated ? (
        <div className="mobile-combustion-data-entry-off">
           
        <form onSubmit={(e) => e.preventDefault()}>
      <div className="mobile-combustion-data-entry-child-off" />
      <img
        className="white-variation-11-off"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item-off" />
      <img className="user-5-11-off" alt="" src={User}/>
      <img
        className="data-management-1-icon1-off"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1-off"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1-off"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group-off">
        <img className="co21-off" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1-off">
        <div className="">
          <div className="menu-label2-off">
            <div className="menu-label3-off">
            <select
                             value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown-off header1-off"
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
      <div className="reporting-year2-off">Reporting Year</div>
      <img
        className="data-management-3-icon1-off"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1-off"
        onClick={handlepreviouspagedataentryRE}
        alt=""
        src={Leftarrow}
      />

      <div className="select-month-off">SI Units</div>
      
      <div className="type-of-electricity2-off">Description</div>
      
     
      <div className="fuel1-off">EMISSIONS OFFSET</div>

      <div className="Units-off">LOCATION</div>
      <b className="type-of-offset-off">TYPE OF OFFSET</b>
      
      <b className="offsets-off">OFFSETS</b>
      <div className="offsets-page-child24-off" />
      <img
        className="data-management-5-icon-off"
        alt=""
        src={Offsets}
      />

      <img className="vector-icon-off" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13-off"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14-off"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div-off" />
      <div className="mobile-combustion-data-entry-child15-off" />
      <div className="mobile-combustion-data-entry-child16-off" />

      <div className="div-off">-452</div>
      <div className="mtco2-off">MTCO2</div>

      <div className={`dynamic-rows-container-off ${rowCount > 0 ? 'scrollable-off' : ''}`}>
        <div>
          <div className="dynamic-rows-off">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12-off" onClick={addRow}>
        <img className="add-6-icon-off" alt="" src={AddIcon}/>
        <b className="add-data-off">ADD ROW</b>
      </buton>
      <button className="offsets-page-child15next-off" onClick={handleNextTarget}>
                    
                    <b className="add-entry2next-off" onClick={handleNextTarget}>NEXT</b>
                    
                    </button>
    </form>
    </div>
    ) : (
      <p>You are not logged in.</p>
    )}
  </div>
    );
};

export default DataEntryOffsets;
