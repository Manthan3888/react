import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState([]);
  const [id, setId] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [search, setsearch] = useState('');
  

  const btnhandler = (e) => {
    if (name !== "" && email !== "" && password !== "") {
      e.preventDefault();
      axios
        .post("http://localhost/PHP/first.php", {
          id: null,
          name: name,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          setname("");
          setemail("");
          setpassword("");
        })

        .catch(function (error) {
          console.log(error);
        });
      settoggle(false);
    }
  };

  const edit = (id, Name, Email, Password) => {
    settoggle(true);
    setId(id);
    setname(Name);
    setemail(Email);
    setpassword(Password);
  };
  const update = () => {
    axios
      .post("http://localhost/PHP/first.php", {
        id: id,
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        setname("");
        setemail("");
        setpassword("");
      })

      .catch(function (error) {
        console.log(error);
      });
    settoggle(false);
  };

  const del = (id) => {
    axios
      .delete('http://localhost/PHP/first.php',{
        id:id
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const searchbtn=()=>{
  //   axios.get(`http://localhost/phpdemo/first.php/?name=${search}`)
  //   .then((response)=>{
  //     console.log(response);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }

  useEffect(() => {
    axios
      .get('http://localhost/PHP/first.php',{
        name:search
      })
      .then((response) => {
        // console.log(response.data);
        setuser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const prevbtn=()=>{
    alert('prev')
  }

  const nextbtn=()=>{
    alert('next')
  }
  return (
    <div>
      <form>
        <div>
          <center>
            <br></br>
            <input
              type="text"
              value={name}
              placeholder="Enter Your Name"
              className="box"
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              className="box"
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              value={password}
              required
              placeholder="Enter Your Password"
              className="box"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>

            {toggle === false ? (
              <input
                type="submit"
                onClick={btnhandler}
                value="Submit"
                className="enter ms-1"
              />
            ) : (
              <input
                type="submit"
                onClick={update}
                value="Update"
                className="enter ms-1"
              />
            )}
          </center>
        </div>
      </form>
      <center>
            <div className="mt-5">
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                crossOrigin="anonymous"
              />
              <div id="container">
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search Hear......"
                    name="search"
                    value={search}
                    onChange={(e)=>{setsearch(e.target.value)}}
                    className="searchbar"
                  />
                  <button type="submit" className="search_button" name="search">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </center>
      <div className="container mt-5">
        <h1>Login User Data Table</h1>
        <table className="rwd-table col-12">
          <tbody>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th> 
            </tr>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" className="mt-4"></input>
                  </td>
                  <td data-th="Supplier Code">{item.id}</td>
                  <td data-th="Supplier Name">{item.Name}</td>
                  <td data-th="Invoice Number">{item.Email}</td>
                  <td data-th="Invoice Date">{item.Password}</td>
                  <td data-th="Invoice Date">
                    <button
                      className="fs-3 edit"
                      onClick={() => {
                        edit(item.id, item.Name, item.Email, item.Password);
                      }}
                    >
                      <FaEdit />
                    </button>
                  </td>
                  <td data-th="Invoice Date">
                    <button
                      className="fs-3 del"
                      name="delete"
                      onClick={() => {
                        del(item.id);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
          <div className="row m-3">
            <div className="col text-end">
              <input type='button' value='Prev' onClick={prevbtn}/>
            </div>
            <div className="col text-start">
              <input type='button' value='Next' onClick={nextbtn}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
