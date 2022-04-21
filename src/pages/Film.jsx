import React from 'react';
import Film_Header from '../components/UI/Film_Header/Film_Header';
import Film_Descriptions from '../components/Film/Film_Descriptions';






const Film = () => {
  return (
    <div className="Main">
      <Film_Header/>
      <Film_Descriptions/>
    </div>
  )
}

export default Film