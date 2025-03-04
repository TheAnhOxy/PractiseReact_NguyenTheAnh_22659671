import { useParams } from "react-router-dom";
import "../App.css"

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", image : "/src/img/cute.jpg" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", image : "/src/img/cute1.jpg" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com",  image : "/src/img/cute2.jpg" },
  { id: 4, name: "Nguyễn Thế Anh", age: 21, email: "Theanhoxy@gmail.com",  image : "/src/img/cute3.jpg" }
];

function UserDetail() {
  const { id } = useParams(); 
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }

  return (
    <div>
      <div >
        <img src={user.image} alt="" className="check_anh" width={100}/>
      </div>
      <h1>{user.name}</h1>
      <p> <b>Tuổi:</b> {user.age}</p>
      <p> <b>Email</b>: {user.email}</p>
    </div>
  );
}

export default UserDetail;
