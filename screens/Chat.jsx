import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useCallback
} from 'react'
import { TouchableOpacity, Text } from 'react-native-gesture-handler/lib/typescript/components/touchables'

const Chat = () => {
  const [message, setMessage] = useState([]);
    
  return (
    <div>Chat</div>
  )
}

export default Chat