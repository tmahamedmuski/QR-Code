import PropTypes from "prop-types";

const Header = ({ Name, Age, isMarried, handleClick }) => {
  return (
    <div>
      <h1 className="Text">Header</h1>
      <p className="till">Super star</p>
      <p className="error">
        25+45=<span className="code">{25 + 45}</span>
      </p>
      <div className="student">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{Name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{Age}</td>
            </tr>
            <tr>
              <th>isMarried</th>
              <td>{isMarried ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  Name: PropTypes.string.isRequired,
  Age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Header;
