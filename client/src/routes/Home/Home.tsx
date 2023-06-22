import { useEffect, useState } from 'react'
import Tree, { Quest, UserObject } from '../../interfaces'
import getQuestTrees from '../../api'
import './Home.css'
import Flow from './Flow/Flow'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../../Navbar/Navbar'
import jwtDecode from "jwt-decode"
import secrets from '../../../secrets.json'

export default function Home() {
    const [questTrees, setQuestTrees] = useState<Tree[]>()
    const [questSelected, setQuestSelected] = useState<Quest>()
    const [sidebarDisplayed, setSidebarDisplayed] = useState(false)
    
    const [user, setUser] = useState<UserObject>()

    useEffect(() => {
        setQuestTrees(getQuestTrees())
        /* global google */
        google.accounts.id.initialize({
            client_id: secrets.googleOAuth.client_id,
            callback: handleCallbackResponse
        })
        google.accounts.id.prompt()
        google.accounts.id.renderButton(
            document.getElementById("googleSignIn"),
            { theme: "filled_black", shape: ""}
        )
    }, [])
  
      function handleCallbackResponse(response: any) {
          const userObject: UserObject = jwtDecode(response.credential)
          // console.log(userObject)
          setUser(userObject)
      }
  
      function handleSignOut() {
          setUser(undefined)
      }
    

    function setQuestIdSelected(quest: Quest | undefined) {
        setQuestSelected(quest)
        setSidebarDisplayed(true)
    }

    function handleBackgroundClicked() {
        setQuestSelected(undefined)
        setSidebarDisplayed(false)
    }

    return (
        <>
            <Navbar user={user} handleSignOut={() => handleSignOut()}/>
            <Sidebar visibility={sidebarDisplayed==true? 'visible': 'hidden'} questSelected={questSelected}/>
            {questTrees?
                <Flow 
                    questTrees={questTrees} 
                    setQuestIdSelected={setQuestIdSelected} 
                    handleBackgroundClicked={handleBackgroundClicked}
                />:
                <>Failed to load Trees</>
            }
        </>
    );

}