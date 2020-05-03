import React from 'react';
const MyPicker=(props)=>{
return(<div className='row'>
  {props.colorvalue.map((colors)=>{
    return(
    <div className="col" key={colors}style={{backgroundColor:colors}}>
    {colors}
    </div>
    );
  })}
</div>);
}

export default MyPicker;