import React from 'react'
import {
    Button,
    Card,
    Col,
    Container,
    Image,
    Row
} from 'react-bootstrap';
import {useNavigate} from "react-router-dom"


export default function Menulist(props) {
    const navigate = useNavigate();
    const Datalists = props.DataList;

    // const Datalist = [
    //     {
    //         img:"https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2021/09/fried-pork-cutlet-curry-with-rice-dark-surface-2-scaled.jpgw3.webp",
    //         id: 0,
    //         name: "ข้าวแกงกะหรี่ญี่ปุ่น",
    //         description: "อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว"
    //     }, {
    //         img:"https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2021/08/yakisoba-noodles-stir-fried-with-vegetable-asian-style-vegan-vegetarian-food-scaled.jpgw3.webp",
    //         id: 1,
    //         name: "ยากิโซบะ",
    //         description: "ยากิโซบะ สูตรนี้ ใช้วัตถุดิบแบบดั้งเดิมที่นิยมใช้กัน นั่นคือ เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก ผัดคลุกเคล้าเข้าด้วยกัน ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย โดยสูตรนี้เป็น เมนูอาหารญี่ปุ่น แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว บอกต่อจากช่อง Just One Cookbook มาดูกันว่า ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น มีวิธีการทำอย่างไร"
    //     }, {
    //         img:"https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2022/03/1-34-800x447.jpgw3.webp",
    //         id: 2,
    //         name: "เกี๊ยวซ่า",
    //         description: "ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย โดยสูตรและส่วนผสมต่าง ๆ มาจาก Youtuber ช่อง daddy cooking"
    //     }
    //


    return (
        <div>
            <Container>
                <Row> {
                    Datalists.map((data, index) => <Col key={index}>
                        <Card style={
                                {width: '25rem'}
                            }
                            className='border-0'>
                            <Card.Body className='text-center'>
                                <Image roundedCircle
                                    width={200}
                                    height={200}
                                    src={
                                        data.img
                                    }/>
                                <Card.Subtitle className='pt-3 font-Mitrs' href="https://fonts.googleapis.com/css2?family=Mitr:wght@200&display=swap">
                                    <h4>{
                                        data.name
                                    }</h4>
                                </Card.Subtitle>
                                <Card.Text className='font-Itim pt-3 Whitespace-normal'>
                                    {
                                    data.description
                                } </Card.Text>

                                <div className='pt-2'>
                                    <Button onClick={
                                            () => {
                                                const datass = [
                                                    {
                                                        ids: data.id
                                                    }, {
                                                        DataList: Datalists
                                                    }
                                                ]
                                                navigate(`/detail`, {state: datass})
                                            }
                                        }
                                        variant="secondary pt-1">
                                        <b className='font-Itim'>ดูวิธีทำ {">>"}</b>
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>)
                } </Row>
            </Container>
        </div>
    )
}
