import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://www.kindpng.com/picc/m/190-1905102_pikachu-pokemon-cute-animal-cool-yellow-pika-pokemon.png"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    {/* sidebar__searchContainer-this is from BAM */}
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
                    
            </div>

            <div className="sidebar__chats">
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>

            </div>
        </div>
    );
}

export default Sidebar
