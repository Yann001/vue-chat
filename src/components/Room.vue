<template>
  <div class="room">
    <div class="head">{{ roomName }}</div>
    <ul class="msg-box">
      <li class="item"
          :class="msg.user.userName === myInfo.userName ? 'my' : ''"
          v-for="msg in msgList"
          :key="msg.id">
        <div class="time">{{ msg.time | timeFilter }}</div>
        <img :src="msg.user.avatar" alt="user-avatar" class="avatar">
        <div class="content">
          <h4 class="user-name">{{ msg.user.userName }}</h4>
          <div class="msg">{{ msg.content }}</div>
        </div>
      </li>
    </ul>
    <div class="send">
      <textarea class="edit" v-model="msgText" @keypress="enterSendMsg"></textarea>
      <a href="javascript:void(0)" class="btn-send" @click="sendMsg">Send</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myInfo: {},
      msgText: ''
    };
  },
  created () {
    this.myInfo = JSON.parse(localStorage.getItem('myInfo'));
  },
  methods: {
    sendMsg () {
      let locMyInfo = JSON.parse(localStorage.getItem('myInfo'));
      let data = {
        type: 'msg',
        msg: {
          roomName: this.roomName,
          user: locMyInfo._id,
          content: this.msgText,
          time: Date.now()
        }
      };
      this.ws.send(JSON.stringify(data));
    },
    enterSendMsg (e) {
      if (e.keyCode === 13) {
        let locMyInfo = JSON.parse(localStorage.getItem('myInfo'));
        console.log(locMyInfo);
        let data = {
          type: 'msg',
          msg: {
            roomName: this.roomName,
            user: locMyInfo._id,
            content: this.msgText,
            time: Date.now()
          }
        };
        this.ws.send(JSON.stringify(data));
      }
    }
  },
  props: ['roomName', 'msgList', 'ws']
};
</script>

<style lang="scss" scoped>
.room {
  width: calc(100% - 250px);
  height: 100%;
  float: left;
  background-color: #e1e9de;
  .head {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .msg-box {
    margin: 0;
    padding: 5px;
    width: 100%;
    height: calc(100% - 152px);
    min-width: 410px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    overflow: auto;
    .item {
      list-style: none;
      .time {
        text-align: center;
      }
      .avatar {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 2px;
      }
      .content {
        float: left;
        padding-left: 10px;
        margin-bottom: 10px;
        .user-name {
          margin: 0;
        }
        .msg {
          position: relative;
          background-color: #fff;
          padding: 10px;
          max-width: 300px;
          border-radius: 3px;
          &::before {
            position: absolute;
            top: 15px;
            left: -4px;
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
            background-color: #fff;
          }
        }
      }
      &.my {
        .avatar {
          float: right;
        }
        .content {
          float: right;
          padding-right: 10px;
          .user-name {
            text-align: right;
          }
        }
        .msg {
          &::before {
            left: auto;
            right: -4px;
          }
        }
      }
      &:last-of-type {
        .content {
          margin-bottom: 50px;
        }
      }
    }
  }
  .send {
    .edit {
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      padding: 5px 10px;
      border: 0;
      resize: none;
      background-color: inherit;
      font-size: 18px;
      word-break: break-word;
      overflow-y: auto;
      &:focus {
        outline: none;
      }
    }
    .btn-send {
      text-decoration: none;
      margin-right: 15px;
      padding: 5px 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #000;
      background-color: #fff;
      float: right;
    }
  }
}
</style>
