import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LandingPage from './Components/LandingPage/Landing_Page';
import UserFormuserconfig from './Components/UserConfiguration/UserFormuserconfig';
import CompanyInfo from './Components/Components_CompanyInfo/CompanyInfo/CompanyInfo';
import DataEntryRE from "./Components/Component_re/DataEntry_re/DataEntryRE";
import DataEntryOffsets from './Components/Component_offsets/DataEntryOffsets/DataEntryOffsets';
import NoTarget from './Components/Component_target/target/NoTarget';
import FinalListTarget from './Components/Components_targetList/List_target/FinalListTarget';
import FacilityEmissionsHome from './Components/FacilityEmissionsHome' ;
import UpstreamEmissionsHome from './Components/Components_upstreamHome/UpstreamEmissionHome';
import FinalListelist from "./Components/Component_elist/List_elist/FinalList_elist"
import DataEntryelect from "./Components/Component_elect/DataEntry_elect/DataEntry_elect"
import ViewDataelvd from "./Components/Component_elvd/List_elvd/FinalList_elvd"
import FinalListSC from './Components/Component_list_sc/List/FinalListSC';
import DataEntrySC from './Components/Component_DE_Sc/DataEntry_DE_SC/DataEntrySC';
import FinalListSCVD from './Components/Components_sc_vd/List_sc_vd/FinalListSCVD';
import FinalListMC from './Components/Component_mc_list/List_MC/FinalListMC';
import DataEntryMC from './Components/Component_mc_de/DataEntry_mc_de/DataEntryMC';
import FinalListMCVD from './Components/Components_mc_vd/List_mc_vd/FinalListMCVD';
import FinalListPE from './Components/Components_pe_list/PEList/FinalListPE';
import DataEntryPE from './Components/Component_pe_de/DataEntry_pe_de/DataEntryPE';
import FinalListPEVD from './Components/Components_pe_vd/List_pe_vd/FinalListPEVD';
import FinalListFE from './Components/Component_FE_list/List_FE/FinalListFE';
import FugitiveDataEntry from './Components/Components_fe_de/fugitive_dataEntry/fugitive_dataEntry';

import GHGInventoryPage from "./Components/pages/GHGInventoryPage"
import GHGInventoryPage2 from "./Components/pages/GHGInventoryPage2";
import GHGInventoryPage3 from "./Components/pages/GHGInventoryPage3";
import EmissionManagementHome from "./Components/pages/EmissionManagementHome";
import EmissionModule from "./Components/components/EmissionModule";
import BoundarySettingPage from "./Components/pages/BoundarySettingPage";
import FacilityDeclarationPage from "./Components/pages/FacilityDeclarationPage"
import LoginPageV from "./Components/pages/LoginPageV";
import ForgotPasswordV from "./Components/pages/ForgotPasswordV";

const App = () => {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;
  const rows = 5;
  const columns = 5;
  const placeholders = [
    ['Enter Facility Name', 'Enter Facility ID', 'Enter Country', 'Enter Latitude', 'Enter Longitude'],
    ['Enter Facility Name', 'Enter Facility ID', 'Enter Country', 'Enter Latitude', 'Enter Longitude'],
    ['Enter Facility Name', 'Enter Facility ID', 'Enter Country', 'Enter Latitude', 'Enter Longitude'],
    ['Enter Facility Name', 'Enter Facility ID', 'Enter Country', 'Enter Latitude', 'Enter Longitude'],
    ['Enter Facility Name', 'Enter Facility ID', 'Enter Country', 'Enter Latitude', 'Enter Longitude'],
  ];
 
  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);
  return (
    <Router>
            <Routes>
                <Route path='/' element={<LoginPageV/>}/>
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path='/forgot' element={<ForgotPasswordV/>}/>
                <Route path="/get_company_details" element={<CompanyInfo />} />
                <Route path="/user_form" element={<UserFormuserconfig />} />

                <Route path='/boundary' element={<BoundarySettingPage/>}/>
                <Route path='/facility' element={<FacilityDeclarationPage rows={rows} columns={columns} placeholders={placeholders}/>}/>
                <Route path="/ghg1" element={<GHGInventoryPage />} />
                <Route path='/ghg2' element={<GHGInventoryPage2/>}/>
               <Route path='/ghg3' element={<GHGInventoryPage3/>}/>
               <Route path='/emission' element={<EmissionManagementHome/>}/>
               <Route path='/emissionm' element={<EmissionModule/>}/>

                <Route path="/upstream-emission-homepage" element={<UpstreamEmissionsHome />} />
                <Route path="/finalList_elist" element={<FinalListelist />} />
                <Route path="/dataEntry_elect" element={<DataEntryelect />} />
                <Route path="/viewData_elvd" element={<ViewDataelvd />} />

                <Route path="/dataEntryRE" element={<DataEntryRE />} />
                <Route path="/dataEntryOffsets" element={<DataEntryOffsets />} />
                <Route path="/notarget" element={<NoTarget />} />
                <Route path="/finalListtarget" element={<FinalListTarget />} />

                <Route path="/facility-emission-homepage" element={<FacilityEmissionsHome />} />
                <Route path="/finalList_sc" element={<FinalListSC />} />
                <Route path="/data-entry_sc" element={<DataEntrySC />} />
                <Route path="/viewData_sc" element={<FinalListSCVD />} />

                <Route path="/finalList_mc" element={<FinalListMC />} />
                <Route path="/data-entry_mc" element={<DataEntryMC />} />
                <Route path="/viewData_mc" element={<FinalListMCVD />} />

                <Route path="/finalList_fe" element={<FinalListFE />} />
                <Route path="/data-entry_fe" element={<FugitiveDataEntry />} />

                <Route path="/finalList_pe" element={<FinalListPE />} />
                <Route path="/data-entry_pe" element={<DataEntryPE />} />
                <Route path="/viewData_PE" element={<FinalListPEVD />} />

            </Routes>
        </Router>
  )
}

export default App;