import { useState } from "react";


const Qrcode = () => {
    const[img,setImg]=useState("images/3.jpg")
    const[loading,setloading]=useState(false)
    const[qrData,setqrData]=useState("")
    const[qrSize,setqrSize]=useState("")
    const[fistnumber,setfistnumber]=useState("")
    const[sendnumber,setsendnumber]=useState("")
    const[output,setoutput]=useState("")
   async function generatreQR(){
        setloading(true)
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
            //const output=`${fistnumber}+${sendnumber}`;

        }catch(error){
            console.error("Error generating QR code ",error);
        }finally{
            setloading(false);



        }
        
      
    }
    function download(){
        alert("please wait it download");
    }
  return (
    <div  className="app">
        <h1>QR CODE GENERATOR //</h1>
        <p>i am</p>
        <p>uj</p>
        {loading && <p>please wait...</p>}
        {img && <img src={img} className="image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label" >
            Data for QR code:
            </label>
            <input type="text" value={qrData} onChange={(e)=> setqrData(e.target.value)} id="dataInput" placeholder="Enter the code"/>
            <input type="text"  value={fistnumber} onChange={(e)=> setfistnumber(e.target.value)}></input>
            <input type="text"  value={sendnumber} onChange={(e)=> setsendnumber(e.target.value)}></input>
            <input type="text"  value={output} onChange={(e)=> setoutput(e.target.value)}></input>
            <label htmlFor="sizeInput" className="input-label">
            Image size (e.g.400 up ):
            </label>
            <input type="text" value={qrSize} onChange={(e)=> setqrSize(e.target.value)} id="sizeInput" placeholder="enter the QR size"/>
            <button className="generate" disabled={loading} onClick={()=> generatreQR()}>generate QR code</button>
            <button className="download" onClick={()=>download()}>Download QR code</button>
        </div>
        <p className="designed">
            Designed By Muski
        </p>
    
    </div>
  )
}

export default Qrcode
