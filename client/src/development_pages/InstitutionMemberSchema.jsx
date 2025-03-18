import { useState, useEffect } from "react";
import "../styles/InstitutionSchema.css";
import axios from 'axios'
import { useAuth } from "../context/AuthContext";

function InstitutionSchemaPage() {
  const [selectedMemberRole, selectMemberRole] = useState("Student");

  const options = ["Student", "Professor", "Admin"];

  const [newAttributeName, setNewAttributeName] = useState("");
  const [newAttributeType, setNewAttributeType] = useState("string");

  const { token } = useAuth();

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

  const updateSchema = () => {
    const institutionMemberSchema = {
      institutionId: 12345,
      schema: schema,
    };

    console.log("Schema update API called");
    axios
      .post("http://localhost:8080/update_schema", institutionMemberSchema, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const dataTypes = ["string", "number"];

  useEffect(() => {
    console.log("Updated object : ", schema);
  }, [schema]);

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
      <input
        placeholder="Attribute name"
        value={newAttributeName}
        onChange={(event) => {
          setNewAttributeName(() => {
            return event.target.value;
          });
        }}
      ></input>
      {"attribute type : "}
      <select
        value={newAttributeType}
        onChange={(event) => {
          setNewAttributeType(() => {
            return event.target.value;
          });
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
      <button
        onClick={() =>
          createOrChangeAttribute(newAttributeName, newAttributeType)
        }
      >
        Create attribute
      </button>
      <button onClick={()=>{updateSchema()}}>Update schema</button>
    </center>
  );
}

export default InstitutionSchemaPage;
