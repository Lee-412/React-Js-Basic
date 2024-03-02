import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/color.js";

function HomeCom(props) {
    const navigate = useNavigate();

    // Sử dụng thời gian delay, kiểm tra thông tin người dùng, chuyển hướng người dùng về trang thực hiện
    // sau đăng nhập
    useEffect(() => {
        // Sử dụng useNavigate trực tiếp trong useEffect
        const timeoutId = setTimeout(() => {
            navigate("/todos");
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    console.log("check props", props);

    return (
        <>
            <div>
                Welcome to my App, Reactjs
            </div>
            <div>
                I'm Lee, Have a Nice Day
            </div>
        </>
    );
}

export default Color(HomeCom);
