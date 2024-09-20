import PropTypes from "prop-types";

const TABLE = ({ data, DeleteItem, GetUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Roll No</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele) => {
          if (ele) {
            return (
              <tr key={ele.id}>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.roll}</td>
                <td>
                  <button className="edit" onClick={() => GetUpdate(ele)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => DeleteItem(ele.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
TABLE.propTypes = {
  data: PropTypes.array.isRequired,
};
TABLE.propTypes = {
  DeleteItem: PropTypes.func.isRequired,
};
TABLE.propTypes = {
  GetUpdate: PropTypes.func.isRequired,
};

export default TABLE;
