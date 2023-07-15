import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as chatAction from '../action/chatAction'
import { BASE_URL } from '../assets/String';
import CustomListItem from '../components/CustomListItem';
import List from '@mui/material/List';

const Chatboard = ({ items }, props) => {
  const [usersData, setUsersData] = useState([])
  const [error, setError] = useState(null);
  const [selectedUser,setSelectedUser] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/entries`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => setUsersData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const clickUser = (user)=>{
    setSelectedUser(user)
    console.log("User Cliked");

  }
  return (
    <div>
       <List sx={{ width: '25%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {usersData?.map((user, index) => ( <CustomListItem user = {user} 
        clickUser = {clickUser} />))}
      </List>
      {selectedUser && (
        <div className="md:w-3/4 h-full md:border-l md:border-gray-300">
          <Chat user={selectedUser} />
        </div>
      )}
    </div>
    

      
  );
};

function mapStateToProps(state) {
  if (state) {
    return {
      usersData: state.users,
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(chatAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatboard);
