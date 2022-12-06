import { React, useState, useEffect } from "react";
import "./restaurantClaims.css"
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


//Claims page for restaurant to see which customer has claimed food

function RestaurantClaims() {

    const [database, setDatabase] = useState([]);


    //get all the claims that a user has put for the restaurant that's logged in and store that JSON data in database
    function GetData() {
        useEffect(() => {
            (async () => {
                try {
                    await axios.get("http://localhost:3001/search2", {
                        params: {
                            restaurant: localStorage.getItem("username")
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


    // display database in table format using react-table-6
    return (
        <main>
            <div className='claimBox'>
                {GetData()}
                <ReactTable
                    data={database}
                    columns={[
                        {
                            Header: "User Claims",
                            style: {
                                textAlign: "center",
                                fontSize: "30px",
                                fontWeight: 'semi-bold',
                                transition: 'all .2s ease-out'
                            },
                            columns: [
                                {
                                    Header: "Username",
                                    accessor: "username",
                                    style: {
                                        textAlign: "center",
                                        fontSize: "15px",
                                        transition: 'all .2s ease-out',
                                        fontFamily: 'lucida'
                                    },
                                },
                                {
                                    Header: "Food",
                                    accessor: "name",
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

                            ]
                        },
                    ]}
                    defaultPageSize={10}
                    style={{
                        width: "700px",
                        FontFace: "itim",
                        height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                /><br />
            </div>
        </main>
    );

}

export default RestaurantClaims;