import { React, useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "./restaurantClaims.css"

function FoodList() {

    const [database, setDatabase] = useState([]);

    //gets the food table and stores the JSON format in database
    function GetData() {
        useEffect(() => {
            (async () => {
                try {
                    await axios.get("http://localhost:3001/search").then((response) => {
                        setDatabase(JSON.parse(JSON.stringify((response.data))))
                    })
                }
                catch (e) {
                    console.log(e)
                }
            })();
        }, []);
    }


    // renders a table with the food data using react-table-6. 
    // Has filters in the category and allergy columns
    return (
        <main>
            <div className='claimBox'>
                {GetData()}
                <><ReactTable
                    data={database}
                    columns={[
                        {
                            Header: "Food List",
                            style: {
                                textAlign: "center",
                                fontSize: "15px",
                                fontWeight: 'semi-bold',
                                transition: 'all .2s ease-out'

                            },
                            Filter: ({filter, onChange}) => (
                                <input
                                    onChange={event => onChange(event.target.value)}
                                    value={filter ? filter.value : ''}
                                    style={{
                                        width: '100%',
                                            backgroundColor: 'grey',
                                    }}
                                    />
                            ),
                           
                            columns: [
                                {
                                    Header: "id",
                                    accessor: "id",
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
                                        transition: 'all .2s ease-out',

                                        //backgroundColor: '#5CB766'

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
                                    Header: "category",
                                    accessor: "category",
                                    style: {
                                        textAlign: "center",
                                        fontSize: "15px",
                                        transition: 'all .2s ease-out'

                                    },
                                    filterable: true

                                },
                                {
                                    Header: "allergen",
                                    accessor: "allergen",
                                    style: {
                                        textAlign: "center",
                                        fontSize: "15px",
                                        transition: 'all .2s ease-out'

                                    },
                                    filterable: true,

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

export default FoodList;