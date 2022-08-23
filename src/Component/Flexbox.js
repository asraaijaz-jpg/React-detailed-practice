import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Flexbox = () => {
    return (
        <div>
            Flexbox
        <div className='container' style={{border:'2px solid blue' , padding:'10px' , display:'flex' , 
      justifyContent:'flex-start'}}>
            <div  style={{width:'10%' ,margin:'4px' , height:'auto' , backgroundColor:'red' , color:'white' , 
            padding:'4px' , flexGrow:'3'}}>One </div>
            <div  style={{width:'10%' ,margin:'4px' , height:'auto' , backgroundColor:'green' , color:'white' , 
            padding:'4px'}}>Two </div>
            <div  style={{width:'10%' , flexBasis:'200px' ,margin:'4px' , height:'auto' , backgroundColor:'blue' , color:'white' , 
            padding:'4px'}}>Thr </div>
             <div  style={{width:'10%' ,margin:'4px' , height:'auto' , backgroundColor:'orange' , color:'white' , 
            padding:'4px'}}>For </div>
            <div  style={{width:'10%' ,margin:'4px' , height:'auto' , backgroundColor:'yellow' , color:'white' , 
            padding:'4px'}}>Fve </div>
            <div  style={{width:'10%' ,margin:'4px' , height:'auto' , backgroundColor:'gray' , color:'white' , 
            padding:'4px'}}>Six </div>
        </div>

        <div>
           <nav>
               <ul style={{listStyle:'none' , display:'flex' , justifyContent:'space-around' , flexWrap:'wrap',
            border:'2px solid blue'}}>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
                   <li style={{display:'inline'}}>About</li>
               </ul>
           </nav>
       </div>

        </div>        
       
       
    );
}

export default Flexbox;


////////////////////////////////////////////////////////////////////Flex Direction///////////////////////////////////

//   flexDirection:'column-reverse'
//   flexDirection:'column'
//   flexDirection:'row'
//   flexDirection:'row-reverse'

////////////////////////////////////////////////////////////////////Flex Wrap///////////////////////////////////
// flexWrap:'nowrap'
// flexWrap:'wrap'
// flexWrap:'wrap-reverse'

////////////////////////////////////////////////////////////////////Flex Flow///////////////////////////////////
// Combination of flex direction and flexwarp
// flexflow:column wrap 

////////////////////////////////////////////////////////////////Justify-content///////////////////////////////////
// Horizontal alignment
// center , end,  flex-start , flex-end , space-between , space-around , space-evenly

///////////////////////////////////////////////////////////////Align-item///////////////////////////////////
// Vertical alignment
// It is for single row
// center , flex-start , flex-end , stretch , baseline

///////////////////////////////////////////////////////////////Align-content///////////////////////////////////
// Vertical alignment
// It is for multiple rows
// center , flex-start , flex-end , stretch , space-between , space-around , space-evenly

///////////////////////////////////////////////////////////////Align-self///////////////////////////////////
// Vertical alignment
// It is for individual single item
// center , flex-start , flex-end , stretch , baseline , auto(follow it's parent div)

///////////////////////////////////////////////////////////////Order///////////////////////////////////
// order:3

///////////////////////////////////////////////////////////////Flex-grow///////////////////////////////////
// increase width of div
// flex-grow:3

///////////////////////////////////////////////////////////////Flex-basis///////////////////////////////////
// give max width to div and never shrink until and unless there is some space available
// It make div width static and never changed
//flex-basis:200px

///////////////////////////////////////////////////////////////Margin///////////////////////////////////
// display:'flex' then use margin
// margin:'auto' , marginleft:'auto' , marginright:'auto'

///////////////////////////////////////////////////////////////Flex-shrink///////////////////////////////////
// reduce size if browser resize
// flex-shrink:3;

