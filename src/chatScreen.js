import React, {  useState,memo,useRef } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid,
  Alert
} from 'react-native';
import { ChatScreen } from '../ChatComponents/react-native-easy-chat-ui'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// check target id and chatinf id 
const  chatScreen =()=>{


  const textRef = useRef()
   const  messages= [
            {
              id: `1`,
              type: 'text',
              content: 'hello world',
              targetId: '12345678',
              chatInfo: {
                avatar: require('../src/images/avatar1.png'),
                id: '88886666',
                nickName: 'Test'
              },
              renderTime: true,
              sendStatus: 0,
              time: '1542006036549'
            },
            {
              id: `2`,
              type: 'text',
              content: 'hi/{se}',
              targetId: '88886666',
              chatInfo: {
                avatar: require('../src/images/avatar2.png'),
                id: '12345678',
                nickName: 'Test'
              },
              renderTime: true,
              sendStatus: 0,
              time: '1542106036549'
            },
            {
              id: `3`,
              type: 'image',
              content: {
                uri: 'https://upload-images.jianshu.io/upload_images/11942126-044bd33212dcbfb8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
                width: 100,
                height: 80,
              } ,
              targetId: '12345678',
              chatInfo: {
                avatar: require('../src/images/avatar1.png'),
                id: '88886666',
                nickName: 'Test'
              },
              renderTime: false,
              sendStatus: 0,
              time: '1542106037000'
            },
            {
              id: `4`,
              type: 'text',
              content: 'hello/{weixiao}',
              targetId: '88886666', 
              chatInfo: {
                avatar: require('../src/images/avatar2.png'),
                id: '12345678'
              },
              renderTime: true,
              sendStatus: -1,
              time: '1542177036549'
            },
          ]

          const [data,setdata]=useState({
          chatBg: {backgroundColor:"#add0ad"},
          inverted: true,  // require
          voiceHandle: true,
          currentTime: 0,
          recording: false,
          paused: false,
          stoppedRecording: false,
          finished: false,
          audioPath: '',
          voicePlaying: false,
          voiceLoading: false
          }
          )
          
  


 const sendMessage = (type, content, isInverted) => {
      console.log(type, content, isInverted, 'msg')
    }




    return (
      <ChatScreen
        ref={(e) => textRef}
        inverted={data.inverted} // this is imp
        messageList={messages}
        sendMessage={sendMessage}
        placeholder = {"Type here..."}
        // renderAvatar={(w)=> console.log("avatar",w)}
        chatId="123455678"  // The id of the person you're chatting with 
        userProfile={{id: '88886666', avatar: require('../src/images/avatar2.png')}} //Your own profile
        // showIsRead
        isReadStyle={{color:"white"}}
        showUserName={true}
// send unable used for if user type cometing but message not passed
        // sendUnableIcon={<Icon name="error-outline" color={"#007bff"}  size={20}></Icon>}
        // setPopItems={Alert.alert("hvuygv")}  // for popup dolog

        showInput={true}
        chatType = "friend"
        onMessageLongPress={(v)=> console.log(v)}
        delMessage={(indexs, isInverted)=> Alert.alert(indexs, isInverted)}
        isIPhoneX={false}
        inputStyle = {{color: "#000",fontSize: 14,marginLeft:12}}
        voicePlaying={true}
        chatWindowStyle={data.chatBg}
        pressAvatar={(isSelf,targetId)=> console.log("avatar press",isSelf,targetId)}
        
        renderErrorMessage={(messageStatus)=> console.log(
          messageStatus== 0 ? "sending":
          messageStatus== 1? "sendSuccess":
          messageStatus== -1? "You are deleted or on the blacklist": "error")}
          messageErrorIcon={<Icon name="error-outline" color={"red"}  size={20}></Icon>}

          leftMessageBackground="#2ac69d"
          leftMessageTextStyle={{color: "#4335c2",fontSize: 14}}
          rightMessageBackground='#2a63c0'
          rightMessageTextStyle={{color: "#810774",fontSize: 14}}
          // keyboardIcon
          renderDelPanel={(isSelect)=>console.log(isSelect)}
          messageDelIcon={<AntDesign name="delete" color={"#00bbff"}  size={20}></AntDesign>}
        // hide and show

        usePlus={false}
        useEmoji={false}
        usePopView={true}
        popoverStyle={{backgroundColor:"blue"}}
        useVoice ={false}
      />
    )
  
}

export default chatScreen


{/* <ChatScreen
plusIcon = {<Icon name="plus" color={"#c1c1c1"}  size={20}></Icon>}
useVoice = {false}
placeholder = {"Type here..."}
// ref={(e) => chat = e}
messageList={messages}
sendMessage={sendMessage}
showInput={true}
emojiIcon = {<></>}
onMessagePress = {sendMessage}
chatType = {"friend"}
showUserName = {true}
userProfile = {""}
chatBackgroundImage={images.BackgroungImg}

// delMessage = {sendMessage}
inputStyle = {{color: "#000",fontSize: 14,marginLeft:12}}
/> */}