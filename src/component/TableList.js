import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableList(props) {
    // console.log(props.Data)
    // {props.Data.map((data)=>{
    //     console.log((data[1].price))
        
    // })}
    // const [result , setResult] = useState(0)

    // const ShowResult = () =>{
    //     const x = result + data[1].price
    //     console.log(x)
    // }
    // }

    console.log(props.Data)
    console.log(props.PriceAll)
    console.log(props.HalfPriceAll)

  return (
    <div>
        <div>
        <div className='text-center pt-5'>
                 <h1 className='font-Itim pb-4'><b>เมนูอาหารญี่ปุ่น</b></h1>   
        </div>
        </div>
        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><b>#</b></th>
                                <th><b>ชื่อเมนู</b></th>
                                <th><b>ราคา {'(บาท)'}</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.Data === undefined ?<>
                                <tr>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>รวม</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>เฉลี่ย</td>
                                <td>0</td>
                            </tr>
                            </>:<>
                            {props.Data.map((data,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td> {data[0].namefood}</td>
                            <td> {data[1].price}</td>
                        </tr>
                            )}
                            {/* <tr>
                                <td></td>
                                <td> {props.Data[0][0].namefood}</td>
                                <td> {props.Data[0][1].price}</td>
                            </tr> */}
                            <tr>
                                <td colSpan={2}>รวม</td>
                                <td>{props.PriceAll}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>เฉลี่ย</td>
                                <td>{props.HalfPriceAll}</td>
                            </tr>
                           
                            </>}
                            
                        </tbody>
                    </Table>
    </div>
  )
}
