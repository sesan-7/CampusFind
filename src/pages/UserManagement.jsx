import { useEffect, useState } from "react"
import axios from 'axios'
import { useAuth } from "../context/AuthContext"

function UserManagementPage() {
    const [schema, setSchema] = useState({})
    const [selectedMemberRole, selectMemberRole] = useState('')

    const authContext = useAuth()
    const { token, user } = useAuth()

    const selectMemberRoleOption = (event) => {
        selectMemberRole(event.target.value)
        console.log("User Selected Value - ", event.target.value)
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/get_schema", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authContext.token}`,
                },
            })
            .then((response) => {
                setSchema(response.data.schema)
            })
            .catch((error) => {
                console.error("Error fetching schema:", error)
            })
    }, [authContext.token])

    return <center>
        <div>
            {<select onChange={selectMemberRoleOption} value={selectedMemberRole}>
                {Object.keys(schema).map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            }
        </div>
        <div>
            {schema[selectedMemberRole] && schema[selectedMemberRole].map((key, value) => {
                return <p key={key}>{key}:{value}</p>
            })}
        </div>
    </center>
}

export default UserManagementPage