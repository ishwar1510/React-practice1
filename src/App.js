import React from 'react'
import Counter from './components/Counter';
import {Greet} from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome'
import Destructuring from './components/Destructuring'
import EventHandler from './components/EventHandler';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from  './app.module.css'
import Form from './components/Form';
import LifecycleMountA from './components/LifecycleMountA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInputRefs from './components/FocusInputRefs';
import ForwardRefsParent from './components/ForwardRefsParent';
import PortalDemo from './components/PortalDemo';
import ErrorChildComp from './components/ErrorChildComp';
import ErrorPrentComp from './components/ErrorParentComp';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import ClickCounterTwo from './components/HigherOrderComponent/ClickCounterTwo';
import HoverCounterTwo from './components/HigherOrderComponent/HoverCounterTwo';
import RenderProps from './components/HigherOrderComponent/RenderProps';
import Counter1 from './components/HigherOrderComponent/Counter1';
import ComponentC from './components/Context/ComponetC';
import { UserProvider } from './components/Context/UserContext';


// import React, { Component } from 'react'
//  class App extends Component {
//   render() {
//     return (
//       <div>
//         <Greet />,
//  <h1>hello i am class component...</h1>
//       </div>
//     )
//   }
// }
// export default App



function App() {
  return (
    <div>
     {/* <Greet name='raj' age='25'>
       i am a developer.....
       </Greet>,

     <Greet name='veer' age='26' >
      <button>Action</button>
     </Greet>,

     <Greet name='dheer' age='27' >
      <h2>hi i am dheer .....</h2>
     </Greet> */}

     {/* <Welcome name='ishwar' age='27' >hi i am good and.. </Welcome>
     <Welcome name='sattya' age='28' ><button>send</button> </Welcome>
     <Welcome name='rahul' age='29' ><button>Action</button> </Welcome> */}

      {/* <Hello /> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <Destructuring name='Ishwar' age='27' /> */}

      {/* <EventHandler /> */}

      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <ConditionalRender /> */}

      {/* <ListRender /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true} /> */}

     

     {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Inline /> */}

      {/* <Form /> */}

      {/* <LifecycleMountA /> */}

      {/* <FragmentDemo /> */}

      {/* <ParentComp /> */}

      {/* <RefsDemo /> */}

      {/* <FocusInputRefs /> */}

      {/* <ForwardRefsParent /> */}

      {/* <PortalDemo /> */}

      {/* <ErrorPrentComp>
      <ErrorChildComp heroName='ishwar' /> 
      <ErrorChildComp heroName='sattya' />
      <ErrorChildComp heroName='jocker' />
      </ErrorPrentComp> */}

        {/* <ClickCounter />
        <HoverCounter /> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}

        {/* <RenderProps name='Ishwar...' /> */}
        {/* <RenderProps render={(isLoggedIn)=>isLoggedIn?'King':'Queen'} /> */}

        {/* <Counter1
          render ={(count,incrementCount)=>
            (<ClickCounterTwo count={count}  incrementCount={incrementCount}/>)}/>

        <Counter1
          render ={(count,incrementCount)=>
            (<HoverCounterTwo
               count={count}  incrementCount={incrementCount}/>)}/> */}

          <UserProvider value="ishwar...">
          <ComponentC />
          </UserProvider>

    </div>
  );
}
export default App;
