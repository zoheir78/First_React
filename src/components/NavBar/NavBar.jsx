import "./NavBar.css";

// function NavBar(params)
// {
//     const rev = "Menu"
//   const about = "About"
//   const prod = "Product"
//   return(
//     <div className='nav'>
//         <div className='navComp'>
//           {rev}
//         </div>
//         <div className='navComp'>
//           {prod}
//         </div>
//         <div className='navComp'>
//           {about}
//         </div>
        
//       </div>
//   );
// }
// export default NavBar;

//////////// la methode dynamique  //////////////
function NavBar (props)
{
  const {elems} = props;

  return (
    <div className='nav'>
         <div className='navComp'>
           {elems.map((e) => {
            return <div className="navComp2" > {e} </div>
           })}
         </div>
         
        
       </div>

  );
}
export default NavBar;