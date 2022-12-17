// import React from 'react';
// import img from 'react-image'
import Avatar_Female from './img/avatar/avatar_female.svg';
import Avatar_Male from './img/avatar/avatar_male.svg';



const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Profile</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr className='tr_contatos' key={item.id}>
            <td>{item.gender == 'Female' ? <img src={Avatar_Female}/> : <img src={Avatar_Male}/> }</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
