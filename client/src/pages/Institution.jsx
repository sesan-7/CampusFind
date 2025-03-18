import { useForm } from "react-hook-form";
import { useState } from "react";
import "../styles/Institution.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { token } = useAuth();

  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = (data) => {
    console.log("AuthToken" + token);
    console.log("Institution Data:", data);
    setIsRegistered(true);

    axios.post(
      "http://localhost:8080/register_institution", null, {
      params: {
        institutionName: data.institutionName,
        contactEmail: data.email,
        type: data.type,
        location: data.location,
        address: data.address
      },
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
    )
      .catch((e) => {
        console.log(e)
      });

  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="Icontent">
        <h1>Institution</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
          laudantium magnam quisquam ratione vitae dolores pariatur temporibus
          minus. Mollitia porro aspernatur laboriosam suscipit vero fugit quam
          illo quaerat neque.
        </p>
      </div> */}

      <div className="Icontent">
        <h1 className="page-title">Register Your Institution</h1>
        <p className="page-subtitle">
          Join our platform to showcase your institution and connect with
          students.
        </p>
      </div>

      {isRegistered ? (
        <div className="success-message">Registration Successful!</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inst">
            <h1>Create Institution</h1>
          </div>
          <input
            {...register("institutionName", {
              required: "Institution name is required",
            })}
            placeholder="Institution Name"
          />

          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />

          <input
            {...register("type", { required: "Type is required" })}
            placeholder="Type (e.g., University, College, School)"
          />

          <input
            {...register("location", { required: "Location is required" })}
            placeholder="Location"
          />

          <input
            {...register("address", { required: "Address is required" })}
            placeholder="Address"
          />

          <div className="error-center">
            {errors.institutionName && (
              <p className="error-message">{errors.institutionName.message}</p>
            )}
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
            {errors.type && (
              <p className="error-message">{errors.type.message}</p>
            )}
            {errors.location && (
              <p className="error-message">{errors.location.message}</p>
            )}
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}
          </div>

          <button type="submit">Register</button>
          <div className="redirect">
            <p>Already registered the institution? Login</p>
          </div>
        </form>
      )}
    </div>
  );
}

// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import "../styles/Institution.css";

// export default function CreateInstitution() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [isCreated, setIsCreated] = useState(false);

//   const onSubmit = (data) => {
//     console.log("Institution Data:", data);
//     setIsCreated(true);
//   };

//   return (
//     <div className="create-institution-container">
//       <h1 className="page-title">Register Your Institution</h1>
//       <p className="page-subtitle">
//         Join our platform to showcase your institution and connect with
//         students.
//       </p>

//       {isCreated ? (
//         <div className="success-message">
//           Institution Registered Successfully!
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="institution-form">
//           <label>Institution Name</label>
//           <input
//             {...register("name", { required: "Institution name is required" })}
//             placeholder="Enter institution name"
//           />
//           {errors.name && (
//             <p className="error-message">{errors.name.message}</p>
//           )}

//           <label>Email</label>
//           <input
//             type="email"
//             {...register("email", { required: "Email is required" })}
//             placeholder="Enter institution email"
//           />
//           {errors.email && (
//             <p className="error-message">{errors.email.message}</p>
//           )}

//           <label>Contact Number</label>
//           <input
//             type="tel"
//             {...register("contact", { required: "Contact number is required" })}
//             placeholder="Enter contact number"
//           />
//           {errors.contact && (
//             <p className="error-message">{errors.contact.message}</p>
//           )}

//           <label>Location</label>
//           <input
//             {...register("location", { required: "Location is required" })}
//             placeholder="Enter institution location"
//           />
//           {errors.location && (
//             <p className="error-message">{errors.location.message}</p>
//           )}

//           <label>Description</label>
//           <textarea
//             {...register("description", {
//               required: "Description is required",
//             })}
//             placeholder="Brief description of the institution"
//           />
//           {errors.description && (
//             <p className="error-message">{errors.description.message}</p>
//           )}

//           <button type="submit">Register Institution</button>
//         </form>
//       )}
//     </div>
//   );
// }
