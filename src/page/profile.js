import React from 'react'
import Navbars from '../component/Navbars'
import Footer from '../component/Footer'
import { Button, Card } from 'react-bootstrap'


export default function profile() {
    const profile = [{
            image: "https://scontent.fnak2-1.fna.fbcdn.net/v/t1.6435-9/124579742_3493811720712489_7612075929483521290_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGScntFKE_Kt4TN-FxCYJ3tWlEmuwFQ2KVaUSa7AVDYpW1s5QOqlQYI7F6-dIIqtbv2Yj7bil4W5vMrA2aZb3j0&_nc_ohc=uvGZKAmNauQAX-If0nw&_nc_ht=scontent.fnak2-1.fna&oh=00_AfAH34W43CzeN6e7dXdHmllpI475raMlNTUPlBUylKSnJw&oe=64F7D83B",
            name: "นายศักรินทร์ หาญชนะพล",
            discription: "นักศึกษา ป.โท คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศและดิจิตัล มหาวิทยาลัยอุบลราชธานี เวลาว่างชอบเล่นเกม มีความสนใจในด้านเทคโนโลยีสารสนเทศ",
            ability: ["HTML🍛", "CSS🍣", "React🍱", "javascript🍜"]
        }]
    return (
        <>
        <><Navbars/></>
        <div>
            <div className='p-5 font-Itim'>
            {profile.map((data)=>
                <Card style={{width: '28rem',margin:"auto"}}>
                <Card.Img variant="top" src={data.image} style={{width:"auto" ,height:"28rem"}}/>
                <Card.Body>
                    <Card.Title><h2><b>{data.name}</b></h2></Card.Title>
                    <Card.Text>
                        {data.discription}
                    </Card.Text>
            <div className='text-center'>
                    <Button className='mx-1' variant="primary">{data.ability[0]}</Button>
                    <Button className='mx-1' variant="danger">{data.ability[1]}</Button>
                    <Button className='mx-1' variant="success">{data.ability[2]}</Button>
                    <Button className='mx-1' variant="warning">{data.ability[3]}</Button>
            </div>                
                </Card.Body>
            </Card>
                )} 
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    )
}
