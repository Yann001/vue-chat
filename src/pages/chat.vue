<template>
  <div class="chat">
    <user-list :userList="userList"></user-list>
    <room
      :roomName="roomName"
      :msgList="msgList"
      :ws="ws"
    ></room>
  </div>
</template>

<script>
import UserList from '@/components/UserList';
import Room from '@/components/Room';
export default {
  data () {
    return {
      roomName: 'Chat Room Name',
      userList: [],
      msgList: [],
      ws: {}
    };
  },
  async created () {
    let userName = this.$route.query.userName;
    this.ws = new WebSocket('ws://localhost:3000/chat');
    this.ws.onopen = () => {
      setTimeout(() => {
        this.ws.send(JSON.stringify({
          type: 'join',
          user: {
            userName
          }
        }));
      }, 500);
      this.ws.onmessage = async (res) => {
        let data = JSON.parse(res.data);
        console.log(data);
        if (data.type === 'init') {
          console.log('msg: init');
          this.userList = data.userList;
          this.msgList = data.msgList;
        } else if (data.type === 'join') {
          console.log('msg: join new user');
          this.userList = data.userList;
        } else if (data.type === 'msg') {
          console.log('msg: receive msg');
          this.msgList.push(data.msg);
        }
      };
    };
  },
  components: {
    UserList,
    Room
  }
};
</script>

<style lang="scss" scoped>
.chat {
  margin: 0 auto;
  margin-top: 10px;
  width: 800px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
