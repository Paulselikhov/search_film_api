import React from 'react'
import "./../styles/nullstyle.css";
import "./../styles/Main.css";

import Main_Title from './../components/Main/Main_Title/Main_Title';
import Search_Input_Button from '../components/UI/Main_Search_Input/Search_Input_Button';
import Main_Post_List from '../components/Main/Main_Post_List';






const Main = () => {
    
    return (
      <div className="Main">
        <div className="Background">
          <div className="Title">
            <Main_Title/>
            <Search_Input_Button/>
          </div>
          <div className="Content_hidden">
              <Main_Post_List/>
            </div>
        </div>
        
        
          
      </div>
    );
  }

export default Main