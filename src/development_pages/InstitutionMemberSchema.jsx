import { useState, useEffect } from "react";
import "../styles/InstitutionSchema.css";
import axios from 'axios'
import { useAuth } from "../context/AuthContext";

function InstitutionSchemaPage() {
  const [selectedMemberRole, selectMemberRole] = useState("");

  const [newAttributeName, setNewAttributeName] = useState("");
  const [newAttributeType, setNewAttributeType] = useState("string");

  const [newRole, setNewRole] = useState("");

  const authContext = useAuth();
  const { token } = useAuth();

  const [schema, setSchema] = useState({
    // Student: {
    //   register_id: "string",
    //   department: "string",
    //   class: "string",
    // },
    // Professor: {
    //   faculty_id: "string",
    //   role: "string",
    //   class: "string",
    // },
    // Professor : {name : "Santhosh"}
  });

  const updateSchema = () => {

    axios
      .post("http://localhost:8080/update_schema", schema, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authContext.token}`,
        },
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const dataTypes = ["string", "number"];

  const schemaEmpty = () => {
    return Object.entries(schema).length > 0
  }
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

  const createUserRole = (role) => {
    if (!role.trim() || schema[role]) return;

    setSchema((prevSchema) => ({
      ...prevSchema,
      [role]: {},
    }));

    selectMemberRole(role);
  };

  return (
    <center>
      {schemaEmpty() && <select onChange={selectMemberRoleOption} value={selectedMemberRole}>
        {Object.keys(schema).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>}
      {schema[selectedMemberRole] && Object.entries(schema[selectedMemberRole]).map(([key, value]) => {
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
        placeholder="User role"
        value={newRole}
        onChange={(event) => { setNewRole(() => { return event.target.value; }); }}
      ></input>
      <button
        onClick={() => {
          createUserRole(newRole)
          setNewRole("")
        }
      }
      >
        Create user role
      </button>
      {schemaEmpty() && <div><input
        placeholder="Attribute name"
        value={newAttributeName}
        onChange={(event) => {
          setNewAttributeName(() => {
            return event.target.value;
          });
        }}
      />
        Attribute Type
        <select className="attribute-type"
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
          onClick={() => {
            if(newAttributeName == "") return
            createOrChangeAttribute(newAttributeName, newAttributeType)
            setNewAttributeName("")
          }
          }
        >
          Create attribute
        </button>
      </div>}
      <button onClick={() => { updateSchema() }}>Update schema</button>
    </center>
  );
}

export default InstitutionSchemaPage;
