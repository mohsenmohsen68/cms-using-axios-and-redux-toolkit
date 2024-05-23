import React, { useState } from "react";
import { Desc, StyledBtn, StyledDiv } from "../../styles/Styles";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/store/UsersReducer";
import swal from "sweetalert";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function User({ firstname, lastname, email, _id, username,age, city }) {
  const [show, setShow] = useState(false);

  const [fn,setFn] = useState(firstname)
  const [ln,setLn] = useState(lastname)
  const [un,setUn] = useState(username)
  const [ci,setCi] = useState(city)
  const [ag,setAg] = useState(age)
  const [em,setEm]= useState(email)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    swal({
      title: "آیا از حذف کاربر مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بلی"]
    }).then((result) => {
      console.log(result);
      if (result) {
        dispatch(removeUser(_id));
        swal({
          title: "کاربر با موفقیت حذف گردید .",
          icon: "success",
          button: "اوکی"
        });
      }
    });
  };

  //  useEffect(()=>{
  //   dispatch(getUserFromServer('https://redux-cms.iran.liara.run/api/users'))
  //  },[])
  return (
    <>
      <StyledDiv className="d-flex justify-content-evenly border align-items-center ">
        <img
          src="/img/profile.jpg"
          alt="profileImage"
          className="rounded-circle border"
          style={{ width: "60px", height: "60px" }}
        />
        <div className="d-flex flex-column">
          <Desc>
            {" "}
            {firstname} {lastname}{" "}
          </Desc>
          <Desc> {email} </Desc>
        </div>
        <StyledDiv className="d-flex gap-2">
          <StyledBtn className="bg-info"> پیام ها </StyledBtn>
          
          <StyledBtn
            className="bg-warning"
            
            onClick={handleShow}
          >
            {" "}
            ویرایش کاربر{" "}
          </StyledBtn>
          <StyledBtn className="bg-danger" onClick={() => removeHandler(_id)}>
            {" "}
            حذف کاربر{" "}
          </StyledBtn>
        </StyledDiv>
      </StyledDiv>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>جزئیات کاربر</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <input type="text" className="w-100 mb-4" value={fn} placeholder="نام" onChange={e=>setFn(e.target.value)} />
          <input type="text" className="w-100 mb-4" value={ln} placeholder="نام خانوادگی" onChange={e=>setLn(e.target.value)}/>
          <input type="text" className="w-100 mb-4" value={un} placeholder="نام کاربری" onChange={e=>setUn(e.target.value)}/>
          <input type="text" className="w-100 mb-4" value={em} placeholder="پست الکترونیکی" onChange={e=>setEm(e.target.value)}/>
          <input type="text" className="w-100 mb-4" value={ag} placeholder="سن" onChange={e=>setAg(e.target.value)}/>
          <input type="text" className="w-100 mb-4" value={ci} placeholder="شهر" onChange={e=>setCi(e.target.value)}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="d-flex justify-content-end" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ثبت تغییرات
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
