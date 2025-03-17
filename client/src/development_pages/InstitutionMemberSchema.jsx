import React, { useState, useEffect } from "react";

function InstitutionSchemaPage() {
    const [selectedMemberRole, selectMemberRole] = useState("Student");

    const options = ["Student", "Professor", "Admin"];

    const [newAttributeName, setNewAttributeName] = useState("");
    const [newAttributeType, setNewAttributeType] = useState("string");

    const [schema, setSchema] = useState({
        Student: {
            register_id: "string",
            department: "string",
            class: "string",
        },
        Professor: {
            faculty_id: "string",
            role: "string",
            class: "string",
        },
    });

    const dataTypes = ["string", "number"];

    useEffect(() => {
        console.log("Updated object : ", schema);
    }, [schema]);

    // useEffect(() => {
    //     console.log("Updated new attribute name : ", newAttributeName);
    // }, [newAttributeName]);
    
    // useEffect(() => {
    //     console.log("Updated new attribute type : ", newAttributeType);
    // }, [newAttributeType]);

    const selectMemberRoleOption = (event) => {
        selectMemberRole(event.target.value);
        console.log("User Selected Value - ", event.target.value);
    };

    const deleteAttribute = (_key) => {
        console.log("Deleting attribute:", _key);

        setSchema((prevSchema) => {
            const updatedSchema = {
                ...prevSchema,
                [selectedMemberRole]: { ...prevSchema[selectedMemberRole] },
            };
            delete updatedSchema[selectedMemberRole][_key];
            return updatedSchema;
        });

    };

    const createOrChangeAttribute = (key, value) => {
        setSchema((prevSchema) => {
            const updatedSchema = {
                ...prevSchema,
                [selectedMemberRole]: { ...prevSchema[selectedMemberRole] },
            };
            updatedSchema[selectedMemberRole][key] = value;

            return updatedSchema;
        });

    };

    return (
        <center>
            <select onChange={selectMemberRoleOption} value={selectedMemberRole}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {Object.entries(schema[selectedMemberRole]).map(([key, value]) => {
                return (
                    <h4 key={key}>
                        {key}
                        {" : "}
                        {
                            <select
                                value={value}
                                onChange={(event) => {
                                    createOrChangeAttribute(key, event.target.value);
                                }}
                            >
                                {dataTypes.map((dataType) => {
                                    return (
                                        <option key={dataType} value={dataType}>
                                            {dataType}
                                        </option>
                                    );
                                })}
                            </select>
                        }
                        <button
                            onClick={() => {
                                deleteAttribute(key);
                            }}
                        >
                            Delete
                        </button>
                    </h4>
                );
            })}
            <br />
            <input placeholder="Attribute name" value={newAttributeName} onChange={(event)=>{setNewAttributeName(()=>{return event.target.value})}}></input>
            {"attribute type : "}
            <select value={newAttributeType} onChange={(event) => {setNewAttributeType(()=>{return event.target.value})}}>
                {dataTypes.map((dataType) => {
                    return (
                        <option key={dataType} value={dataType}>
                            {dataType}
                        </option>
                    );
                })}
            </select>
            <button onClick={() => createOrChangeAttribute(newAttributeName, newAttributeType)}>Create attribute</button>
            <button>Add schema</button>
        </center>
    );
}

export default InstitutionSchemaPage;
