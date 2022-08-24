import logo from './logo.svg';
import './App.css';
import Funcmp from './Component/Funcmp';
import Classcmp from './Component/Classcmp';
import JSX from './Component/JSX';
import Statehandling from './Component/statehandling';
import Counter from './Component/Counter';
import Parent from './Component/parent';
import Conditionalrendering from './Component/Conditionalrendering';
import Mapfunction from './Component/mapfunction';
import Styling from './Component/Styling';
import Form from './Component/form';
import Mountinglifecycle from './Component/Mountinglifecycle';
import Fragments from './Component/Fragments';
import Ref from './Component/Ref';
import Refchild from './Component/Refchild';
import Refparent from './Component/Refparent';
import Errorboundary from './Component/errorboundary';
import Errorhandling from './Component/errorhandling';
import ClickcounterHOC from './Component/ClickcounterHOC';
import HovercounterHOC from './Component/HovercounterHOC';
import HOC from './Component/HOC';
import Renderprops from './Component/Renderprops';
import ClickcounterRenderprops from './Component/Clickcounterrenderprops';
import HovercounterRenderprops from './Component/HovercounterRenderprops';
import ContextA from './Component/ContextA';
import ContextB from './Component/ContextB';
import ContextC from './Component/ContextC';
import { Provider } from './Component/Usercontext';
import Getrequest from './Component/Getrequest';
import Postrequest from './Component/Postrequest';
import UsestateHook from './Component/Usestate_Hook';
import Mousemovercode from './Component/Mousemovercode';
import Removeacomp from './Component/Removeacomp';
import Automatictimer from './Component/automatictimer';
import Fetchdatawithuseeffect from './Component/Fetchdatawithuseeffect';
import Reducer from './Component/Reducer';
import CounterwithUseReducer from './Component/CounterwithUseReducer';
import CompA_useReducer_useContext_sharecounterValueInAllComp from './Component/CompA_useReducer_useContext_sharecounterValueInAllComp';
import CompB_useReducer_useContext_sharecounterValueInAllComp from './Component/CompB_useReducer_useContext_sharecounterValueInAllComp';
import CompC_useReducer_useContext_sharecounterValueInAllComp from './Component/CompC_useReducer_useContext_sharecounterValueInAllComp';
import React, { useReducer  , useContext} from 'react';
import Call_API_using_useReducer_and_useEffect from './Component/Call_API_using_useReducer_and_useEffect';
import Make_mul_comp_Pass_data_through_props from './Component/Make_mul_comp_Pass_data_through_props';
import Mediaquery from './Component/Mediaquery';
import Flexbox from './Component/Flexbox';



//////////////////////////////////////this is for only usereducer along with usecontext////////////////

// const initialvalue=0;
  export const contextusing=React.createContext();

//   const reducer=(state,action)=>{
//   switch(action)
//   {
//     case 'increment':
//       return state+1;
//     case 'decrement':
//       return state-1;
//     case 'reset':
//       return initialvalue;
//     default:
//       return state;
//   }
//   }

function App() {
 
  // const [count,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div className="App">

      {/* <contextusing.Provider value={{globalcount:count , globaldispatch:dispatch}}>
       
       <h3>{count}</h3>

      <CompA_useReducer_useContext_sharecounterValueInAllComp/>
      <CompB_useReducer_useContext_sharecounterValueInAllComp/>
      <CompC_useReducer_useContext_sharecounterValueInAllComp/>

      </contextusing.Provider> */}

{/* //////////////////////////////////////this is for only usereducer along with usecontext//////////////// */}


  {/* <Flexbox/> */}
    {/* <Mediaquery/> */}
       {/* <Make_mul_comp_Pass_data_through_props/> */}
      {/* <Call_API_using_useReducer_and_useEffect/> */}
      {/* <CounterwithUseReducer/> */}
      {/* <Reducer/> */}
      {/* <Fetchdatawithuseeffect/> */}
      {/* <Automatictimer/> */}
      {/* <UsestateHook/> */}
        {/* <Mousemovercode/> */}
        {/* <Removeacomp/> */}
      {/* <Postrequest/> */}
      {/* <Getrequest/> */}
{/* 
<Provider value='Asra Furqan I am come directly through value of Context'>
  <ContextA/>
</Provider> */}

    {/* <h1>Hello world</h1> */}
    {/* Props are immutable */}
    {/* <Funcmp propname='Asra'>
      <p>children 1</p>
      <p>children 2</p>
    </Funcmp> */}
    {/* <Funcmp propname='Furqan'/> */}
    {/* <Classcmp propname='Sadia'/> */}
    {/* <JSX/> */}
    {/* <Statehandling/> */}
    {/* <Counter/> */}
    {/* <Parent/> */}
    {/* <Conditionalrendering/> */}
    {/* <Mapfunction/> */}
    {/* <Styling condiononapplycss={true}/> */}
    {/* <Form/> */}
    {/* <Mountinglifecycle/> */}
    {/* <Fragments/> */}
    {/* <Ref/> */}
    {/* <Refchild/> */}
    {/* <Refparent/> */}

    {/* <Errorhandling>
    <Errorboundary heroname='batman'/>
    </Errorhandling>

    <Errorhandling>
    <Errorboundary heroname='superman'/>
    </Errorhandling>
    
    <Errorhandling>
    <Errorboundary heroname='joker'/>
    </Errorhandling>
    */}
    
    <ClickcounterHOC remainingprops={(isLogged)=>'use spread operator in HOC to pass remianing props'}/>
    {/* <HovercounterHOC remainingprops={(isLogged)=>isLogged?'use spread operator in HOC to pass remianing props':'No'}/> */}


    {/* <Renderprops>
      {(count,counter)=>{<ClickcounterRenderprops count={count} counter={counter}/>}}
    </Renderprops>
    <Renderprops render={(count,counter)=>{<HovercounterRenderprops count={count} counter={counter}/>}}/>
     */}


    </div>
  );
}

// rfce then press tab , it create a functional component.
// rpce then press tab , it create a class component.
// rconst

export default App;

