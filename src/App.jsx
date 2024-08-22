import {React , useState,useRef, useEffect} from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Form from './Components/Form'
import Home from './Components/Home'
import Menu from './Components/menu'
import Pages from './Components/pages'
import Contact from './Components/Contact'
import About from './Components/About'
import Cart from './Components/cart'
import Footer from './Components/Footer'
import BookTable from './Components/BookTable'
import { Route,Routes, BrowserRouter } from 'react-router-dom'

const getLocalStorage = () => {
  let list = localStorage.getItem("cart");
  if (list) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
}
const getLocalPrice = () => {
  let list = localStorage.getItem("price");
  if (list) {
    return JSON.parse(localStorage.getItem("price"));
  } else {
    return 0;
  }
}
const getLocalCount = () => {
  let list = localStorage.getItem("count");
  if (list) {
    return JSON.parse(localStorage.getItem("count"));
  } else {
    return 0;
  }
}
const App = () => {
  const set=(event)=>{
      document.querySelector('.active')?.classList.remove('active')
      event.currentTarget.classList.add('active')
  }
  const [date, setDate] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const year = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024,
  ];
  const [dte, setDte] = useState('');
  const [mon, setMon] = useState('');
  const [yr, setYr] = useState('');
  const [fn,setFn] = useState('')
  const [ln,setLn] = useState('')
  const [em,setEm] = useState('')
  const [ps,setPs] = useState('')
  const [cp,setCp]=useState('')
  const [ispass,setPass]=useState(true)
  let isvalid = false
  const valid=useRef(isvalid)
  const [quantity,setQuantity]=useState(1)
  const formdata = {
    firstname: fn,
    lastname: ln,
    dob: `${dte} - ${mon} - ${yr}`,
    email: em,
    password: ps,
    cnfrmpass:cp
  };
  const [err,setErr] = useState({
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    password:'',
    cnfrmpass:''
  })
  const [isshow, setShow] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    let er = {}
    if (!formdata.firstname) {
      er.firstname = 'Firstname is required'
    }
    if (!formdata.lastname) {
      er.lastname = 'Lastname is required'
    }
    if (!formdata.dob) {
      er.dob = 'Date of birth is required'
    }
    if (!formdata.email) {
      er.email = 'Email is required'
    }
    if (!formdata.password) {
      er.password = 'Password is required'
    }
    if (formdata.password.length < 8) {
      er.password = 'Password Length Must be 8'
    }
    if (formdata.cnfrmpass && formdata.cnfrmpass !== formdata.password) {
      er.cnfrmpass = 'Password Donot Match'
    }
    setErr({ ...er })
    const isValid = Object.keys(er).length < 1
    valid.current = isValid
    if (isValid) {
      alert('Form Submitted')
    } else {
      alert('Form Not Submitted')
    }
    return isValid
  };
  const dateHandle = (e) => {
    setDte(e.target.value);
  };
  const monthHandle = (e) => {
    setMon(e.target.value);
    if (e.target.value == 2) {
      const update = date.filter((_, i) => {
        return date.splice(30, 1) && date.splice(29, 1) && date.splice(28, 1);
      });
      setDate(update);
    } else {
      setDate([...date, 29, 30, 31]);
    }
  };
  const yearhandle = (e) => {
    setYr(e.target.value);
  };
  const firstHandle=(e)=>{
    setFn(e.target.value)
    err.firstname=''
  }
  const lastHandle=(e)=>{
    setLn(e.target.value)
    err.lastname=''
  }
  const emailHandle=(e)=>{
    setEm(e.target.value)
    err.email=''
  }
  const passHandle=(e)=>{
    setPs(e.target.value)
    err.password=''
    if(ps.length>=8){
      document.querySelectorAll('.bi-x')[1].classList.toggle('bi-check')
    }
  }
  const CpassHandle=(e)=>{
    setCp(e.target.value)
    err.cnfrmpass=''
  }
  const shpass=(e)=>{
    setPass(!ispass)
  }
  const show=()=>{
    setShow(!isshow)
  }
  const[showlog,setLog]=useState(false)
  const showL=()=>{
    setLog(!showlog)
  }
  const [logval,setLogval]=useState('')
  const [logpass,setLogpass]=useState('')
  const loginData={
    email:logval,
    password:logpass
  }
  const [logErr,setLogErr]=useState({
    email:'',
    password:''
  })
  const handleLogin=(e)=>{
    e.preventDefault()
    let er={}
    if(loginData.email===''){
      er.email='Email is required'
    }
    if(loginData.password===''){
      er.password='Password is required'
    }
    setLogErr({...er})
    const isValid = Object.keys(er).length < 1
    if(isValid){
      alert('Login Successful')
    }
    else{
      alert('Invalid Credentials')
    }
    return isValid
  }
  
  const handleEmail=(e)=>{
    setLogval(e.target.value)
    logErr.email=''
  }
  const handlePass=(e)=>{
    setLogpass(e.target.value)
    logErr.password=''
  }
  const [menu,setMenu] = useState([
    {
      img:'egg.jpg',
      title:'Fried Eggs',
      price:9.99,
      category:'Breakfast',
      quantity:1,
      iscart:false
    },
    {
      img:'pizza.jpg',
      title:'Pizza',
      price:15.99,
      category:'Main Dishes',
      quantity:1,
      iscart:false
    },
    {
      img:'juice.jpg',
      title:'Martinez Cocktail',
      price:7.25,
      category:'Drinks',
      quantity:1,
      iscart:false
    },
    {
      img:'cake.jpg',
      title:'ButterScotch Cake',
      price:20.99,
      category:'Desserts',
      quantity:1,
      iscart:false
    },
    {
      img:'lemonade.jpg',
      title:'Mint Lemonade',
      price:5.89,
      category:'Drinks',
      quantity:1,
      iscart:false
    },
    {
      img:'icecream.jpg',
      title:'Choclate Icecream',
      price:18.05,
      category:'Main Dishes',
      quantity:1,
      iscart:false
    },
    {
      img:'burger.jpg',
      title:'Cheese Burger',
      price:12.55,
      category:'Main Dishes',
      quantity:1,
      iscart:false
    },
    {
      img:'waffles.jpg',
      title:'Classic Waffles',
      price:12.99,
      category:'Desserts',
      quantity:1,
      iscart:false
    }
  ])
  const [price,setPrice] = useState(getLocalPrice())
  const [men,setMen] = useState(menu)
  const MenuSet=(event)=>{
    const updated = menu.filter((e) => {
      return e.category === event
    })
    setMen(updated)
  }
  const [cart,setCart] = useState(getLocalStorage())
  const addCart=(event)=>{
    if (!event.iscart){
      setCart([...cart,event])
      alert(`Added ${event.title} to cart`)
      setCount(e => e+1)
      setPrice(e => e + event.price)
      event.iscart=true
    }
    else{
      alert(`Already added ${event.title} to cart`)
    }
  }
  const remove=(event)=>{
    event.iscart=false
    setCart(cart.filter((e)=>{
      return e!==event
    }))
    setCount(e => e-1)
    setPrice(e => e - event.price)
  } 
  const minus =async (event) => {
    if (event.quantity > 1) {
      event.quantity = event.quantity - 1
    }
    else {
      event.quantity = 1
    }
  }
  const add = async (event) => {
    event.quantity = event.quantity + 1
  }
  const [count,setCount] = useState(getLocalCount())
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('price',JSON.stringify(price))
    localStorage.setItem('count',JSON.stringify(count))
  },[cart,price,count])
  return (
    <div>
      <BrowserRouter>
      <NavBar set={set} show={show} showL={showL} count={count}/>
      {isshow ? <Form
        date={date}
        month={month}
        year={year}
        handleSubmit={handleSubmit}
        dateHandle={dateHandle}
        monthHandle={monthHandle}
        yearhandle={yearhandle}
        formdata={formdata}
        firstHandle={firstHandle}
        lastHandle={lastHandle}
        emailHandle={emailHandle}
        passHandle={passHandle}
        CpassHandle={CpassHandle}
        err={err}
        ispass={ispass}
        shpass={shpass}
        show={show}
      /> : null}
      {
        showlog ? <Login showL={showL} handleLogin={handleLogin} handleEmail={handleEmail} handlePass={handlePass} loginData={loginData} logErr={logErr}/> : null
      }
      <Routes basename='/app'>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu menu={menu} men={men} MenuSet={MenuSet} setMen={setMen} addCart={addCart}/>} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/cart' element={<Cart cart={cart} remove={remove} price={price} minus={minus} add={add} setQuantity={setQuantity} quantity={quantity}/>} />
        <Route path='/booktable' element={<BookTable />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )

}
export default App