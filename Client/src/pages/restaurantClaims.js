import { React, useState, useEffect} from "react";
import "./restaurantClaims.css"
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


function RestaurantClaims() {
    
    const [database, setDatabase] = useState([]);
    

    

    var data = "";
      function GetData(){
        useEffect(() => {
            (async () => {
                try {
                    await axios.get("http://localhost:3001/userlist").then((response) => {
                      setDatabase(JSON.parse(JSON.stringify((response.data))))
                    
    
                    })
                  }
                  catch (e) {
                    console.log(e)
                  }
            })();
          }, []);
      }
     

   

    return (
            
         <div>
            <div className="claimFood">
                <div className='claimFoodBox'>
                    {GetData()}
                            <><ReactTable
                            data={database}
                            columns={[
                                {
                                    Header: "User Claims",
                                    columns: [
                                        {
                                            Header: "Username",
                                            accessor: "username"
                                        },
                                        {
                                            Header: "Food",
                                            accessor: "email"
                                        },
                                        {
                                            Header: "Date",
                                            accessor: "pass"
                                        }
                                    ]
                                },
                            ]}
                            defaultPageSize={20}
                            style={{
                                height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                            }}
                            className="-striped -highlight" /><br /></>
                    
                        

                    
                </div>
            </div>
        </div>
      );
        
    }

    
  
      
     /*  <>
       <h1>Restaurant Claims page </h1>
       <p>Check which user is picking up food</p>
      

       </>
    */
  
    


export default RestaurantClaims;

