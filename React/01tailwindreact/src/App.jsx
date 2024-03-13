import { useState } from "react";
import Example from "./components/setState/Example";
import ExampleEvent from "./components/eventcomp/ExampleEvent";
import ParentComp from "./components/childParentComm/ParentComp";
import { ExampleConditional } from "./components/conditional/ExampleConditional";
import ExampleCss from "./components/cssModule/ExampleCss";
import { ExampleForm } from "./components/formBasic/ExampleForm";
import Parent from "./components/pureComp/Parent";
import { RefExample } from "./components/refComp/RefExample";
import { FRefExample } from "./components/refComp/FRefExample";
import { PortalExample } from "./components/portalReact/PortalExample";
import { HeroList } from "./components/errorBoundary/HeroList";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import { CounterRender } from "./components/renderProps/CounterRender";
import { ClickCounterRender } from "./components/renderProps/ClickCounterRender";
import { HoverCounterRender } from "./components/renderProps/HoverCounterRender";
import { Page } from "./components/context/Page";
import { UserProveider } from "./components/context/UserContext";
import { PostList } from "./components/httpForm/PostList";
import { PostForm } from "./components/httpForm/PostForm";
import { TickCounter } from "./components/tickCounter/TickCounter";
import { UseReducerOne } from "./components/useReducer/UseReducerOne";
import { UseReducerTwo } from "./components/useReducer/UseReducerTwo";
import { UseReducerThree } from "./components/useReducer/UseReducerThree";
import { ReducerContextA } from "./components/useReducerContext/ReducerContextA";
import { PostListReducer } from "./components/httpForm/PostListReducer";
import { UseCallbackParent } from "./components/useCallback/UseCallbackParent";
import { ParentMemo } from "./components/memoization/ParentMemo";
import { CustomHookParent } from "./components/customHook/CustomHookParent";


function App() {
  return (
    <div className="text-center">
      {/* <Example/> */}
      {/* <ExampleEvent/> */}
      {/* <ParentComp/> */}
      {/* <ExampleConditional/> */}
      {/* <ExampleCss/> */}
      {/* <ExampleForm/> */}
      {/* <Parent/>       */}
      {/* <RefExample/> */}
      {/* <FRefExample/> */}
      {/* <PortalExample/> */}
      {/* <HeroList/> */}
      {/* <ClickCounter age={21}/>
      <HoverCounter age={21}/> */}
      {/* <CounterRender>
        {(count, incrementCounter) => (
          <ClickCounterRender
            count={count}
            incrementCounter={incrementCounter}
          />
        )}
      </CounterRender>
      <CounterRender>
        {(count, incrementCounter) => (
          <HoverCounterRender
            count={count}
            incrementCounter={incrementCounter}
          />
        )}
      </CounterRender> */}
      {/* <UserProveider value='sh'>        
            <Page/>                 
      </UserProveider> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <TickCounter/> */}
      {/* <UseReducerOne/> */}
      {/* <UseReducerTwo/> */}
      {/* <UseReducerThree/> */}
      {/* <ReducerContextA/> */}
      {/* <PostListReducer/> */}
      {/* <UseCallbackParent/> */}
      {/* <ParentMemo/> */}
      <CustomHookParent/>
    </div>
  );
}

export default App;
