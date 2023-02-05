import React from 'react'
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'
import './home.css'
import 'react-reflex/styles.css'
import QuestionTab from './QuestionTab'
import IdeTab from './IdeTab'
import ResultTab from './ResultTab'
import UserTab from './UserTab'
import ChatTab from './ChatTab'
import clsx from 'clsx'

const Home = () => {

  const resetEditorLayout = () => {

  };

  return (
    <div className='h-[100vh] text-center text-white'>
       <ReflexContainer orientation="horizontal">
          <ReflexElement style={{ paddingTop: "1rem" }}>
            <ReflexContainer orientation="vertical">
              <ReflexElement>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement className='pane-color'>
                    <QuestionTab/>
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              {/* End of 1st content */}
              <ReflexSplitter
                className={clsx('splitter' , 'splitter-verticle')} 
                onStopResize={() => resetEditorLayout()}
              />
              <ReflexElement flex={0.45}>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement style={{ display: "flex" }} className='pane-color'>
                    <IdeTab/>
                  </ReflexElement>
                  <ReflexSplitter
                    className={clsx('splitter' , 'splitter-horizontal')} 
                    onStopResize={() => resetEditorLayout()}
                  />
                  <ReflexElement flex={0.3} className='pane-color'>
                   <ResultTab/>
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              {/* 3rd content */}
              <ReflexSplitter
                className={clsx('splitter' , 'splitter-verticle')}  
                onStopResize={() => resetEditorLayout()}
              />
              <ReflexElement flex={0.18}>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement style={{ display: "flex" }} className='pane-color'>
                    <UserTab/>
                  </ReflexElement>
                  <ReflexSplitter
                    className={clsx('splitter' , 'splitter-horizontal')} 
                    onStopResize={() => resetEditorLayout()}
                  />
                  <ReflexElement flex={0.8} className='pane-color'>
                   <ChatTab/>
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
        
            </ReflexContainer>
          </ReflexElement>
    
        </ReflexContainer>

    </div>
  )
}

export default Home
