
import { React} from "react";
import "./addFood.css"

function AddFood() {
    

    return (
        <div className="addFood">
      <div className='addFoodBox'>
        <div className='addFoodHeader'>
                    <h3>Add Food</h3>
     </div>
    
        <div className='inputs'>
                    <h3>Food: </h3>
                    <input className='food' type= "text"/>
                    <h3>Restaurant: </h3>
                    <input className='restaurant' type= "text"/>
                    <h3>Address: </h3>
                    <input className='restaurant' type= "text"/>
                    <h3>Allergy</h3>
                    <input className='allergy' type= "text"/>

        </div>
        <h3>Category: </h3>
        <select name="userType" id="selectType"  >
          <option value="meat" >Non-vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          </select>

                    <button className='addFoodSubmit'>Add</button>
      </div>
      <div>
    
    </div>
    </div>
  );
    
    
}

export default AddFood;



