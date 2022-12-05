import { React, useState, useEffect} from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


function UserClaims() {
    
    const [database, setDatabase] = useState([]);
    


    //get the claims that the logged in user has placed and store the JSON data in database
      function GetData(){
        useEffect(() => {
            (async () => {
                try {
                    await axios.get("http://localhost:3001/search3", {
                        params: {
                            username: localStorage.getItem("username")
                        }
                    }).then((response) => {
                        setDatabase(JSON.parse(JSON.stringify((response.data))))


                    })
                  }
                  catch (e) {
                    console.log(e)
                  }
            })();
          }, []);
      }
     

   

      // display the claims in table format through react-table-6
    return (
        <main>
            <div className='claimBox'>
                {GetData()}
                        <><ReactTable
                        data={database}
                        columns={[
                            {
                                Header: "Your Claims",
                                style: {
                                    textAlign: "center",
                                    fontSize: "30px",
                                    fontWeight: 'semi-bold',
                                    transition: 'all .2s ease-out'

                                },
                                columns: [
                                    {
                                        Header: "Food",
                                        accessor: "name",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            transition: 'all .2s ease-out',

                                            //backgroundColor: '#5CB766'

                                        }
                                    },
                                    {
                                        Header: "Restaurant",
                                        accessor: "restaurant",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            transition: 'all .2s ease-out'

                                        }
                                

                                        
                                    },
                                    {
                                        Header: "Address",
                                        accessor: "address",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            transition: 'all .2s ease-out'

                                        }



                                    },
                                    {
                                        Header: "Date",
                                        accessor: "time",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            transition: 'all .2s ease-out'

                                        }
                                    },
                                    
                                ],
                                
                        
                                
                            },
                        ]}
                        defaultPageSize={10}
                        
                        style={{
                            
                            width: "700px",
                            FontFace: "itim",
                            height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        className="-striped -highlight" /><br /></>
                
                    

                
            </div>
        </main>
  
      );
        
    }

    
  
    


export default UserClaims;

