import { React, useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "./restaurantClaims.css"

function FoodList() {

    const [database, setDatabase] = useState([]);

    var data = "";
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


    return (
        <div>
            <div className="claimFood">
                <div className='claimFoodBox'>
                    {GetData()}
                    <><ReactTable
                        data={database}
                        columns={[
                            {
                                Header: "Food List",
                                style: {
                                    textAlign: "center",
                                    fontSize: "30px",
                                    fontWeight: 'semi-bold',
                                    color: 'black',
                                    transition: 'all .2s ease-out'

                                },
                                columns: [
                                    {
                                        Header: "id",
                                        accessor: "id",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }



                                    },
                                    {
                                        Header: "Address",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "30px",
                                            color: 'black',
                                            transition: 'all .2s ease-out',
                                            fontFamily: 'lucida'

                                            //backgroundColor: '#5CB766'

                                        },
                                        accessor: "address",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out',
                                            //backgroundColor: '#5CB766'

                                        }
                                    },
                                    {
                                        Header: "Food",
                                        accessor: "name",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }



                                    },
                                    {
                                        Header: "category",
                                        accessor: "category",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }
                                    },
                                    {
                                        Header: "allergen",
                                        accessor: "allergen",
                                        style: {
                                            textAlign: "center",
                                            fontSize: "15px",
                                            color: 'black',
                                            transition: 'all .2s ease-out'

                                        }
                                    },
                                ],



                            },
                        ]}
                        defaultPageSize={10}

                        style={{


                            FontFace: "itim",
                            height: "600px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        className="-striped -highlight" /><br /></>




                </div>
            </div>
        </div>
    );


}

export default FoodList;