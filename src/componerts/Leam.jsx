import PropTypes  from "prop-types"
const userData=[
  {
    name:"Muski",
    city:"New York",
    description:"Front-End developer",
    skills:["UI/UX","frontn End development","HTML","CSS","JavaScript","React","Node"],
    online: true,
    profile:"images/3.jpg",
  },
  {
    name:"Ahamed",
    city:"New York",
    description:"Front-End developer",
    skills:["UI/UX","frontn End development","HTML","CSS","JavaScript","React","Node"],
    online: false,
    profile:"images/3.jpg",
  },
];
function User(props){
  return (
    <div className="card ">
      <span className={props.online ? "pro online":"pro offline"}>{props.online ? "online":"offline"}</span>
      <img src={props.profile} alt="User" height={150} width={150} className="img" ></img>
      <h3>{props.name}</h3>
      <p>{props.city}</p>
      <p>{props.description}</p>
      <div className="button">
        <button className="message">Message</button>
        <button className="following">Following</button>
        
      </div>
      <div>
        <ul>skills
          {props.skills.map((skill,index) => (
            <li key={index}> 
            {skill}</li>

          ))}

        </ul>
        </div>

    </div>
      
  )
}

const Leam = () => {
  return (
    <>
      {userData.map((user, index) => (
          <User key={index} name={user.name}  city={user.city} description={user.description} online={user.online} profile={user.profile} skills={user.skills}/>
        ))}
    
    
    
    </>
  )
  //  <div>
  //   {/* <User name="Muski" description="Front-End developer" skills={["UI/UX","frontn End development","HTML","CSS","JavaScript","React","Node"]} online={true}  profile="images/3.jpg"/> 
  //   */
   
     
  //   }
  //   </div>
  // )
}

export default Leam

User.propTypes = {
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
}