import React from 'react';
function Students(props)
{
return 
    (
    <div>
        <p>Student Name {props.StudentRollno}</p>
        <p>Student Name {props.StudentAge}</p>
        <p>Student Name {props.StudentName}</p>
    </div>
    );
}
export default Students;