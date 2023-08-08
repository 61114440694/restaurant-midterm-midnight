/* eslint-disable no-useless-concat */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import TableList from './TableList';


export default function FormAddAndTable() {   
  const [namefood , setNameFood] = useState("")
  const [prices , setPrices] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [listData,setListData] = useState([])
  const [PriceAll , setPriceAll] = useState(0)
  const [HalfPriceAll ,setHalfPriceAll] = useState(0)
  
  // const [validated, setValidated] = useState(false);

  //   const handleSubmit = (event) => {
  //       const form = event.currentTarget;
  //       if (form.ceckValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
    
  //       setValidated(true);
  //     };

const ClickForAdd = () =>{
  if(namefood.length >= 1 && prices.length >= 1){
    addObjectToArray()
  }
  else{
    alert("กรุณากรอกข้อมูลให้ครบทุกช่องด้วยนะครับ ขอบคุณมากค้าบบ~~")
  }
  
  // const datas = {
  //   foodname:namefood,
  //   price:prices
  // }
  // setListData(...listData,datas)
  // console.log(listData.datas)

}

const addObjectToArray = () => {
  const data = [{namefood : namefood},{price : prices}]
  listData.push(data)
  console.log(listData)
  for(let i=0 ; i < listData.length ; i++ ){
    console.log(listData[i][1].price)
    let x = Number(PriceAll)
    let y = Number(listData[i][1].price)
    let xy = x+y
    let hv = xy/(listData.length)
    console.log("sce"+" "+xy)
    console.log("half"+" "+hv)
    setPriceAll(xy.toFixed(2))
    setHalfPriceAll(hv.toFixed(2))
  }
  }

  // console.log(namefood.length)


  return (
    <div style={{marginLeft:"8rem", marginRight:"8rem"}}>
      <div className='font-Itim'>
        {listData.length === 0?<><TableList /></>:<>
        <TableList Data={listData} PriceAll={PriceAll} HalfPriceAll={HalfPriceAll}/>
        </>}
        
      </div>
      <div className='pt-3 pb-4'>
        <h1 className='font-Itim text-center'><b>เพิ่มเมนูใหม่</b></h1>
      </div>
      <div>
        <div className='text-center'>
          <label className='font-Itim'>ชื่อเมนู : </label>
          <input onChange={(e)=>{setNameFood(e.target.value)}} style={{width:"40%", height:"2rem"}} className='mx-3'/>
          <label className='font-Itim'>ราคา : </label>
          <input type='number' min={0} max={9999} onChange={(e)=>{setPrices(e.target.value)}} style={{width:"40%", height:"2rem"}} className='mx-3'/>
          <Button onClick={ClickForAdd}
             style={{width:"auto",height:"2rem", marginBottom:"0.45rem" ,paddingBottom:"1.8rem"}} variant="primary" className='font-Itim'>Add</Button>
        </div>
        {/* {listData === null ?<>s</>:<>
        {listData.map((data,)=><>{data.namefood}</>)}
        </>} */}
      </div>
    </div>
  )
}
