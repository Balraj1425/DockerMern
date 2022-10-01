import React, { useEffect, useState } from "react";
import axios from "axios";


const Homefun = (props) => {
    const [data, setData] = useState();

    useEffect(
        ()=>{
            axios
            .get("http://localhost:3001/getdetails")
            .then((res) => {
              console.log("res", res);
              setData(res.data);
            })
            .catch((err) => {
              console.log("err", err);
            });
        },
        []
    )

    return(
        <>
            <h1>Fetch Data</h1>
            {data &&
                <div>
                    <label>Username:</label> {data[0].username}
                </div>
            }
        </>
    )
}

export default Homefun