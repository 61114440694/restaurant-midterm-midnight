/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbars from '../component/Navbars';
import Footer from '../component/Footer';
import { useLocation } from "react-router-dom";


export default function detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  // console.log(location.state[0].ids);
  // console.log(location.state[1].DataList[location.state[0].ids])
  const Datalists = location.state[1].DataList[location.state[0].ids]
    return (
    <div>
        <div><Navbars /></div>
        <div style={{marginLeft:"0.5rem" , marginRight:"0.5rem",marginBottom:"4rem",marginTop:"1rem"}} className='font-Itim'>
          {location.state[0].ids === 1?(<>
            <img style={{width:"100%" , height:"100%"}} src={Datalists.img}/>
            <h1 className='mt-4 text-center'>{Datalists.name}</h1>
            <div style={{marginLeft:"2rem" , marginRight:"2rem",marginBottom:"4rem",marginTop:"1rem"}}>
              <div>
                {Datalists.description}
              </div>
              <h2>ส่วนผสมซอส</h2>
              <ul>
              {Datalists.sauce.map((data)=><li>{data}</li>)}
              </ul>
              <h2>วัตถุดิบ</h2>
              <ul>
              {Datalists.material.map((data)=><li>{data}</li>)}
              </ul>
              <h2>วิธีทำ</h2>
              <ul className='list-decimal'>
              {Datalists.solution.map((data)=><li>{data}</li>)}
              </ul>
            </div>
          </>):(<>
            <img style={{width:"100%" , height:"100%"}} src={Datalists.img}/>
            <h1 className='mt-4 text-center'>{Datalists.name}</h1>
            <div style={{marginLeft:"2rem" , marginRight:"2rem",marginBottom:"4rem",marginTop:"1rem"}}>
              <div>
                {Datalists.description}
              </div>
              <h2>วัตถุดิบ</h2>
              <ul>
              {Datalists.material.map((data)=><li>{data}</li>)}
              </ul>
              <h2>วิธีทำ</h2>
              <ul className='list-decimal'>
              {Datalists.solution.map((data)=><li>{data}</li>)}
              </ul>
            </div>
          </>)}
           
        </div>
        <div><Footer /></div>
    </div>
  )
}
