import React from 'react';

function Students(props) {
    return (
            <div>
                <p>Student Rollno is:-  {props.Rollno}</p>
                <p>Student Name is:-  {props.Name}</p>
                <p>Student Age is:- {props.Age}</p>
            </div>
    );
}
export default Students;