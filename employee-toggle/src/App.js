import React, { useState } from "react";

const CoworkersList = (props) => {
  const { coworkers } = props;

  const initialState = coworkers.reduce((a, b) => {
    const name = b.first_name + b.last_name;
    a[name] = true;
    return a;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleStatus = (name) => {
    setEmployeeStatus({ ...employeeStatus, [name]: !employeeStatus[name] });
  };

  return coworkers.map(({ first_name, last_name }) => {
    const name = first_name + last_name;

    return (
      <div key={name} onClick={() => toggleStatus(name)}>
        <p>
          Name : {first_name} {last_name}
        </p>
        <p>Status : {employeeStatus[name] ? "Online" : "Offline"}</p>
      </div>
    );
  });

  // Todo: create a simple status dispalyer
  // "OnClick" toggle employee status
  // "Online" or "Offline", default: 'Online'
  // Add your code here
  // Should return JSX
};

CoworkersList.defaultProps = {
  coworkers: [
    { first_name: "Naruto", last_name: "Uzumaki" },
    { first_name: "Sasuke", last_name: "Uchiha" },
    { first_name: "Sakura", last_name: "Haruno" },
  ],
};

export default CoworkersList;
