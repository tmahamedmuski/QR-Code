/*import React from "react";

export const Header = () => {
  return React.createElement("div",null,React.createElement("h1",{className:"Text"},"Ahmed muski"),React.createElement("p",{className:"till"},"super star"));
}
export default Header
*/
//refc
import propTypes from "prop-types";
export const Header = (props) => {
  let customCSS="error";
  const isLoggedIn=false;
  const greeting=isLoggedIn ? <p className="code" >welcome</p> : <p className="error">please log in</p>
  const items =["Item 01","Item 02","Item 03"];
  const {handleClick}=props;
  return (
    <div>
        <h1 className="Text">header</h1>
        <p className="till">super star</p>
        <p className={customCSS}>25+45=<span className="code">{25+45}</span></p>

        {/* jsx with conditional renderring */}
        {greeting}
        {/* list  */}
        Name of the list 
        <ul>
          {items.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        <div className="student">
          <table>
            <tr>
             <th>Name</th>
             <td>{props.Name}</td>
            </tr>
            <tr>
             <th>Age</th>
             <td>{props.Age}</td>
            </tr>
            <tr>
             <th>isMarried</th>
             <td>{props.isMarried ? "yes": "no"}</td>
            </tr>
          </table>
          <p>this is a function component.</p>
          <button onClick={handleClick}>Click me</button>
        </div>
    
    </div>
  )
}
export default Header
Header.propTypes={
  Name:propTypes.string,Age:propTypes.number,isMarried:propTypes.bool,
}
Header.propTypes={
  handleClick:propTypes.func.isRequired
}


