
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransanctionList from './components/TransanctionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
    <Header />
    <div className='container'>
    <Balance />
    <IncomeExpense />
    <TransanctionList />
    <AddTransaction /></div>
    </GlobalProvider>
 </>
  );
}

export default App;
