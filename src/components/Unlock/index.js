// Write your code here
import {useState} from 'react'
import {MainContainer, Image, Description, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickLockBtn = () => {
    setLock(prev => !prev)
  }

  return (
    <MainContainer>
      {isLocked ? (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Description>Your Device is Locked</Description>
          <Button onClick={onClickLockBtn}>Unlock</Button>
        </>
      ) : (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Description>Your Device is Unlocked</Description>
          <Button onClick={onClickLockBtn}>Lock</Button>
        </>
      )}
    </MainContainer>
  )
}

export default Unlock
