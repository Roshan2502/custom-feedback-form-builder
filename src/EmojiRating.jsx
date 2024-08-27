import React from 'react'
import {Rate} from 'antd'
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons/lib/"

const EmojiRating = () => {
    const smileyRating = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    }

  return (
    <div>
        <Rate
            count={5}
            character={({index}) => {
                return smileyRating[index+1];
            }}
        />
    </div>
  )
}

export default EmojiRating



  
  

// import React from 'react'
// import {CIcon} from '@coreui/icons-react';
// import { CRating } from '@coreui/react-pro'
// import * as icon from '@coreui/icons';
  
//   const EmojiRating = () => {
//     const icons = {
//         1: <CIcon icon={icon.brandSetcilMoodVeryBad} customClassName=" " />,
//         2: <CIcon icon={icon.cilMoodBad} customClassName=" " />,
//         3: <CIcon icon={icon.cilMeh} customClassName=" " />,
//         4: <CIcon icon={icon.cilMoodGood} customClassName=" " />,
//         5: <CIcon icon={icon.cilMoodVeryGood} customClassName=" " />,
//       }
      
//       const activeIcons = {
//         1: <CIcon icon={icon.cilMoodVeryBad} customClassName="text-danger-emphasis" />,
//         2: <CIcon icon={icon.cilMoodBad} customClassName="text-danger" />,
//         3: <CIcon icon={icon.cilMeh} customClassName="text-warning" />,
//         4: <CIcon icon={icon.cilMoodGood} customClassName="text-success" />,
//         5: <CIcon icon={icon.cilMoodVeryGood} customClassName="text-success-emphasis" />,
//       }

//     return (
//         <CRating
//           activeIcon={activeIcons}
//           highlightOnlySelected
//           icon={icons}
//           tooltips={['Very bad', 'Bad', 'Meh', 'Good', 'Very good']}
//           value={3}
//         />
//       )
//   }
  
//   export default EmojiRating