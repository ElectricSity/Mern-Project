import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import {Menu} from './MenuNavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from './homepage';
import { Signin } from './Signin';
import { Signup } from './Signup';
import {MyAddress} from './Address'
import { MyPayment } from './payment';
import {MyAddressS} from './Adresscart'
import {MyPaymentT} from './paymentT'
import {Chooseoption} from './AdminOptions'
import{Prod} from './AdminProd'


function App() {  
const [user,setuser]=useState(null)
  return (

<BrowserRouter>
     <Routes>
        <Route path='/' element={<Homepage user={user} setuser={setuser} />} />
        <Route path='/signin' element={<Signin user={user} setuser={setuser} />} />
        <Route path='/signup' element={<Signup user={user} setuser={setuser} />}  />
        <Route path='/addAdress' element={<MyAddress user={user} setuser={setuser} />}  />
        <Route path='/addAdress/payment' element={<MyPayment user={user} setuser={setuser} />}  />

        <Route path='/addAdress1' element={<MyAddressS user={user} setuser={setuser} />}  />
        <Route path='/addAdress1/payment1' element={<MyPaymentT user={user} setuser={setuser} />}  />
        <Route path='/adminoptions' element={<Chooseoption user={user} setuser={setuser} />} />
        <Route path='/adminoptions/adminproducts' element={<Prod user={user} setuser={setuser} />} />

     </Routes>
</BrowserRouter>
 
  );
}



export default App;

