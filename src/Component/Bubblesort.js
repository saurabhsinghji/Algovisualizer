import React,{useState} from "react";
import '../App.css'


const BubbleSort = () => {
    const[col,setCol]=useState(0);
    const [arr,setArr] = useState(['23', '12', '11', '34', '45', '6', '77', '98','23','56']);
   
 
    const [boxValues, setBoxValues] = useState(arr);

    const operation =()=>{
      
      
    }
     
    
    
    
     
    
   
 
  const handleBoxValueChange = (index, newValue) => {
    const updatedValues = [...boxValues];
    updatedValues[index] = newValue;
    setBoxValues(updatedValues);
    setArr(updatedValues);

  };
  const Style={
    marginTop:'20px',
    marginLeft:'20%',
    marginRight:'20%',
    width:'auto ',
    height:'auto',
    fontSize:'larger',fontWeight:'bold'
  }
  const renderBoxes = () => {
    return boxValues.map((value, index) => (
      <div key={index} className="box" style={{ background: index === col ? "green" : "pink"}}>
        <input style={{width:'50px',fontSize:'larger',backgroundColor:index === col ? "green" : "pink",borderStyle:'none'}}
          type="text"
          value={value}
          onChange={(e) => handleBoxValueChange(index, e.target.value)}
        />
      </div>
    ));
  };

  return (
    <>
    <div className="container">
    {renderBoxes()}
    </div>
     {/* <input style={Style} type="text" placeholder="Enter the Tagret Value" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
     <div style={{ marginLeft:'20%',
    marginRight:'20%',
    width:'auto ',
    height:'auto',
    fontSize:'small',fontWeight:'bold'}}>Enter the Search element</div> */}
  
   
    <button style={Style}  className="btn1" onClick={operation}>Sort</button>
    

    
    
    </>
  );
}

export default BubbleSort;
