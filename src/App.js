import React , {useState} from 'react';
import Expenses from './companents/Expenses';
import Card from './UI/Card';
import NewExpens from './companents/NewExpens/NewExpens';
import './App.css';

const ArraY = [
  {
    name:"Lamborghini",
    data:new Date('10-10-2023'),
    price:"450000"
  },
  {
    name:"Ferrari",
    data:new Date('10-05-2021'),
    price:"300000"
  },
  {
    name:"BMW",
    data:new Date('01-07-2019'),
    price:"200000"
  }
]

function App() {
  const [newdata , setNewdata] = useState(ArraY)
  const ChangeArr = (element)=>{
    setNewdata((item)=>[
      ...item,
      element
    ])
  }
  return (
    <div>
     <Card>
     <NewExpens FuncArr={ChangeArr} />
     <Expenses data={newdata} />
     </Card>
    </div>
  );
}

export default App;
