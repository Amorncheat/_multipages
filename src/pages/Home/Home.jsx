import './Home.css';
import React from 'react';

function Home() {
    return (
        <div className="container">
            <img 
                src="img/pic/stdempimg.jfif" 
                alt="Profile" 
                className="profile-image" 
            />
            <h1 className="heading">สวัสดี</h1>
            <p className="paragraph">
                ผมนาย อมรเศรษฐ์ ธนาปรีชาศริ เป็น นักศึกษาปีที่ 2 ของมหาวิทยาลัยศรีปทุม
            </p>
            <p className="paragraph">
                ยินดีที่ได้รู้จักทุกคนครับ
            </p>
        </div>
    );
}

export default Home;