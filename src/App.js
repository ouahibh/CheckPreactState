import './App.css';
import React, {useState, useEffect} from 'react';
const App = ()=> {
  const p = {
    fullName:'Mon nom',
    profession:'Developppeur',
    bio:'https://web.facebook.com/ouahib.h.06/',
    imgsrc:'https://scontent.falg4-1.fna.fbcdn.net/v/t1.0-9/10460720_10202734272730517_1998600882405210955_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFyO-DEDOeOzPXS4afG77L7EBI8ZkrA88kQEjxmSsDzyU5bbioufpRayCMXFlACqTE&_nc_ohc=aqG2hfhU94gAX_E4Iwu&_nc_ht=scontent.falg4-1.fna&oh=b5092a6d4780cd934d13c6e358509014&oe=6040F964',
  }
  const [person, setPerson] = useState(p);
  const [show, setShow] = useState(true);
  const [timer, setTimer] = useState(36000);
  useEffect(() => {
    setTimeout(()=>{
      setTimer(timer-1)
    },1000)
  }, [timer])
  
  return (
    <div className={'contenairP'}>
      <h1>Notre timer :{timer} </h1>
      {show===false &&(
        <button onClick={()=>setShow(!show)}>Afficher le profil</button>
      )} 
      {show===true &&(
        <button onClick={()=>setShow(!show)}>Afficher le profil</button>
      )}
       
      {show===true && (
      <div className={'myProfil'} >
          <h3>Full name : {person.fullName} </h3>
          <h3>Profession : {person.profession} </h3>
          <h3>Bio :{person.bio} </h3>
          <img style={{width:'20rem', height:'35rem'}} src={person.imgsrc}  />
          <h3>Photo</h3>
      </div>
      
      )}
     
    </div>
  );
}

export default App;
