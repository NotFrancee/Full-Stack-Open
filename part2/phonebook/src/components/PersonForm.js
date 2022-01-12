import React from "react";

const PersonForm = ({handleSubmit, handleFormChange, formData}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input 
                  name='name'
                  value={formData.name} 
                  placeholder='New Name' 
                  onChange={handleFormChange}
                  />
        </div>
        <div>
          number: <input 
                      name='number'
                      value={formData.number} 
                      placeholder='Phone Number' 
                      onChange={handleFormChange}/>
        
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm